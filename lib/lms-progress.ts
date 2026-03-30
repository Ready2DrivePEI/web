import type { Database } from "@/database.types";
import { supabase } from "@/lib/supabase/client";
import {
  getFirstChapterId,
  getProgressPercentForChapter,
  getChapterIndex,
} from "@/app/lms-course/data/modules";

type StudentProgressRow = Database["public"]["Tables"]["student_progress"]["Row"];

export type StudentProgressSnapshot = Pick<
  StudentProgressRow,
  "user_id" | "last_chapter_id" | "furthest_chapter_id" | "progress_percent" | "updated_at"
>;

const PROGRESS_SNAPSHOT_KEY = "r2d:progress:snapshot";
const LAST_PATH_KEY = "r2d:progress:last-path";

function readLocalSnapshot(): StudentProgressSnapshot | null {
  if (typeof window === "undefined") return null;

  const rawValue = window.localStorage.getItem(PROGRESS_SNAPSHOT_KEY);
  if (!rawValue) return null;

  try {
    return JSON.parse(rawValue) as StudentProgressSnapshot;
  } catch {
    return null;
  }
}

function writeLocalSnapshot(snapshot: StudentProgressSnapshot) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(PROGRESS_SNAPSHOT_KEY, JSON.stringify(snapshot));
}

type LastPathCache = {
  chapterId: string;
  path: string;
  updatedAt: string;
};

export function cacheLastLmsPath(args: { chapterId: string; path: string }) {
  const { chapterId, path } = args;
  if (typeof window === "undefined") return;
  if (!path.startsWith("/lms-course")) return;

  const payload: LastPathCache = {
    chapterId,
    path,
    updatedAt: new Date().toISOString(),
  };
  window.localStorage.setItem(LAST_PATH_KEY, JSON.stringify(payload));
}

export function getCachedLastLmsPath(chapterId: string | null): string | null {
  if (!chapterId || typeof window === "undefined") return null;

  const rawValue = window.localStorage.getItem(LAST_PATH_KEY);
  if (!rawValue) return null;

  try {
    const parsed = JSON.parse(rawValue) as LastPathCache;
    if (parsed.chapterId !== chapterId) return null;
    if (!parsed.path?.startsWith("/lms-course")) return null;
    return parsed.path;
  } catch {
    return null;
  }
}

function getDefaultFurthestChapterId(): string | null {
  return getFirstChapterId();
}

function getSafeFurthestChapterId(candidate: string | null): string | null {
  if (candidate && getChapterIndex(candidate) >= 0) return candidate;
  return getDefaultFurthestChapterId();
}

async function getCurrentUserId() {
  if (!supabase) return null;
  const { data, error } = await supabase.auth.getUser();
  if (error || !data.user) return null;
  return data.user.id;
}

async function fetchProgressRow(userId: string): Promise<StudentProgressSnapshot | null> {
  if (!supabase) return null;

  const { data, error } = await supabase
    .from("student_progress")
    .select("user_id,last_chapter_id,furthest_chapter_id,progress_percent,updated_at")
    .eq("user_id", userId)
    .maybeSingle();

  if (error) return null;
  return data as StudentProgressSnapshot | null;
}

async function saveProgressRow(
  userId: string,
  payload: Pick<
    Database["public"]["Tables"]["student_progress"]["Insert"],
    "last_chapter_id" | "furthest_chapter_id" | "progress_percent" | "updated_at"
  >,
): Promise<StudentProgressSnapshot | null> {
  if (!supabase) return null;

  const rowToSave: Database["public"]["Tables"]["student_progress"]["Insert"] = {
    user_id: userId,
    ...payload,
  };

  const { data, error } = await supabase
    .from("student_progress")
    .upsert(rowToSave, { onConflict: "user_id" })
    .select("user_id,last_chapter_id,furthest_chapter_id,progress_percent,updated_at")
    .maybeSingle();

  if (error || !data) return null;
  const snapshot = data as StudentProgressSnapshot;
  writeLocalSnapshot(snapshot);
  return snapshot;
}

export async function getStudentProgress(): Promise<StudentProgressSnapshot | null> {
  const userId = await getCurrentUserId();
  if (!userId) return readLocalSnapshot();

  const snapshot = await fetchProgressRow(userId);
  if (snapshot) {
    writeLocalSnapshot(snapshot);
    return snapshot;
  }

  return readLocalSnapshot();
}

export async function trackLastVisitedChapter(chapterId: string): Promise<StudentProgressSnapshot | null> {
  const userId = await getCurrentUserId();
  if (!userId) return null;

  const current = await fetchProgressRow(userId);
  const furthestChapterId = getSafeFurthestChapterId(current?.furthest_chapter_id ?? null);

  if (!furthestChapterId) return null;

  const nextSnapshot = await saveProgressRow(userId, {
    last_chapter_id: chapterId,
    furthest_chapter_id: furthestChapterId,
    progress_percent: getProgressPercentForChapter(furthestChapterId),
    updated_at: new Date().toISOString(),
  });

  return nextSnapshot;
}

export async function handleQuizPassProgress(args: {
  currentChapterId: string;
  nextChapterId: string | null;
}): Promise<StudentProgressSnapshot | null> {
  const { currentChapterId, nextChapterId } = args;
  const userId = await getCurrentUserId();
  if (!userId) return null;

  const current = await fetchProgressRow(userId);
  const defaultFurthest = getSafeFurthestChapterId(current?.furthest_chapter_id ?? null);
  if (!defaultFurthest) return null;

  const storedFurthest = current?.furthest_chapter_id ?? defaultFurthest;
  const storedFurthestIndex = getChapterIndex(storedFurthest);
  const candidateFurthest = nextChapterId ?? currentChapterId;
  const candidateIndex = getChapterIndex(candidateFurthest);
  const shouldAdvance = candidateIndex > storedFurthestIndex;
  const resolvedFurthest = shouldAdvance ? candidateFurthest : storedFurthest;
  const resolvedLastVisited = nextChapterId ?? currentChapterId;

  const nextSnapshot = await saveProgressRow(userId, {
    last_chapter_id: resolvedLastVisited,
    furthest_chapter_id: resolvedFurthest,
    progress_percent: getProgressPercentForChapter(resolvedFurthest),
    updated_at: new Date().toISOString(),
  });

  return nextSnapshot;
}
