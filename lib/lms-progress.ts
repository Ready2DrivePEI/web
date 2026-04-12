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
type StudentProgressRowWithId = StudentProgressSnapshot & { id: number };

const PROGRESS_SNAPSHOT_KEY = "r2d:progress:snapshot";
const LAST_PATH_KEY = "r2d:progress:last-path";
const PROGRESS_SELECT_FIELDS =
  "id,user_id,last_chapter_id,furthest_chapter_id,progress_percent,updated_at";

function readLocalSnapshot(): StudentProgressSnapshot | null {
  if (typeof window === "undefined") return null;

  const rawValue = window.localStorage.getItem(PROGRESS_SNAPSHOT_KEY);
  if (!rawValue) return null;

  try {
    const parsed = JSON.parse(rawValue) as StudentProgressSnapshot;
    return normalizeSnapshot(parsed);
  } catch {
    return null;
  }
}

function writeLocalSnapshot(snapshot: StudentProgressSnapshot) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(PROGRESS_SNAPSHOT_KEY, JSON.stringify(snapshot));
}

function normalizeSnapshot(snapshot: StudentProgressSnapshot): StudentProgressSnapshot {
  const safeFurthest = getSafeFurthestChapterId(snapshot.furthest_chapter_id ?? null);
  const safeLast =
    snapshot.last_chapter_id && getChapterIndex(snapshot.last_chapter_id) >= 0
      ? snapshot.last_chapter_id
      : safeFurthest;

  return {
    ...snapshot,
    last_chapter_id: safeLast,
    furthest_chapter_id: safeFurthest,
    progress_percent: getProgressPercentForChapter(safeFurthest),
  };
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
  if (error || !data.user) {
    if (error) {
      console.error("[lms-progress] auth user lookup failed:", error.message);
    }
    return null;
  }
  return data.user.id;
}

async function fetchProgressRow(userId: string): Promise<StudentProgressRowWithId | null> {
  if (!supabase) return null;

  const { data, error } = await supabase
    .from("student_progress")
    .select(PROGRESS_SELECT_FIELDS)
    .eq("user_id", userId)
    .order("updated_at", { ascending: false })
    .order("id", { ascending: false })
    .limit(1)
    .maybeSingle();

  if (error) {
    console.error("[lms-progress] fetchProgressRow failed:", error.message);
    return null;
  }
  return data as StudentProgressRowWithId | null;
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
    .select(PROGRESS_SELECT_FIELDS)
    .maybeSingle();

  if (!error && data) {
    const row = data as StudentProgressRowWithId;
    const snapshot: StudentProgressSnapshot = {
      user_id: row.user_id,
      last_chapter_id: row.last_chapter_id,
      furthest_chapter_id: row.furthest_chapter_id,
      progress_percent: row.progress_percent,
      updated_at: row.updated_at,
    };
    writeLocalSnapshot(snapshot);
    return snapshot;
  }

  if (error) {
    console.error("[lms-progress] upsert failed, trying fallback save:", error.message);
  }

  const existing = await fetchProgressRow(userId);
  if (existing) {
    const { data: updatedData, error: updateError } = await supabase
      .from("student_progress")
      .update(rowToSave)
      .eq("id", existing.id)
      .select(PROGRESS_SELECT_FIELDS)
      .maybeSingle();

    if (!updateError && updatedData) {
      const row = updatedData as StudentProgressRowWithId;
      const snapshot: StudentProgressSnapshot = {
        user_id: row.user_id,
        last_chapter_id: row.last_chapter_id,
        furthest_chapter_id: row.furthest_chapter_id,
        progress_percent: row.progress_percent,
        updated_at: row.updated_at,
      };
      writeLocalSnapshot(snapshot);
      return snapshot;
    }

    if (updateError) {
      console.error("[lms-progress] fallback update failed:", updateError.message);
    }
    return null;
  }

  const { data: insertedData, error: insertError } = await supabase
    .from("student_progress")
    .insert(rowToSave)
    .select(PROGRESS_SELECT_FIELDS)
    .maybeSingle();

  if (insertError || !insertedData) {
    if (insertError) {
      console.error("[lms-progress] fallback insert failed:", insertError.message);
    }
    return null;
  }

  const insertedRow = insertedData as StudentProgressRowWithId;
  const insertedSnapshot: StudentProgressSnapshot = {
    user_id: insertedRow.user_id,
    last_chapter_id: insertedRow.last_chapter_id,
    furthest_chapter_id: insertedRow.furthest_chapter_id,
    progress_percent: insertedRow.progress_percent,
    updated_at: insertedRow.updated_at,
  };
  writeLocalSnapshot(insertedSnapshot);
  return insertedSnapshot;
}

export async function getStudentProgress(): Promise<StudentProgressSnapshot | null> {
  const userId = await getCurrentUserId();
  if (!userId) return readLocalSnapshot();

  const snapshot = await fetchProgressRow(userId);
  if (snapshot) {
    const normalized = normalizeSnapshot({
      user_id: snapshot.user_id,
      last_chapter_id: snapshot.last_chapter_id,
      furthest_chapter_id: snapshot.furthest_chapter_id,
      progress_percent: snapshot.progress_percent,
      updated_at: snapshot.updated_at,
    });
    writeLocalSnapshot(normalized);
    return normalized;
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

  const storedFurthest = getSafeFurthestChapterId(current?.furthest_chapter_id ?? null) ?? defaultFurthest;
  const storedFurthestIndex = getChapterIndex(storedFurthest);
  const candidateFurthest = getSafeFurthestChapterId(nextChapterId ?? currentChapterId) ?? storedFurthest;
  const candidateIndex = getChapterIndex(candidateFurthest);
  const shouldAdvance = candidateIndex > storedFurthestIndex;
  const resolvedFurthest = shouldAdvance ? candidateFurthest : storedFurthest;
  const resolvedLastVisited =
    nextChapterId && getChapterIndex(nextChapterId) >= 0 ? nextChapterId : currentChapterId;

  const nextSnapshot = await saveProgressRow(userId, {
    last_chapter_id: resolvedLastVisited,
    furthest_chapter_id: resolvedFurthest,
    progress_percent: getProgressPercentForChapter(resolvedFurthest),
    updated_at: new Date().toISOString(),
  });

  return nextSnapshot;
}
