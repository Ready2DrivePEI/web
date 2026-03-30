import type { Database } from "@/database.types";
import { createClient } from "@/lib/supabase/server";
import { getFirstChapterId } from "@/app/lms-course/data/modules";

type StudentProgressRow = Database["public"]["Tables"]["student_progress"]["Row"];

export type StudentProgressSnapshot = Pick<
  StudentProgressRow,
  "user_id" | "last_chapter_id" | "furthest_chapter_id" | "progress_percent" | "updated_at"
>;

export async function getServerStudentProgress(): Promise<StudentProgressSnapshot | null> {
  const supabase = await createClient();
  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (userError || !user) return null;

  const { data, error } = await supabase
    .from("student_progress")
    .select("user_id,last_chapter_id,furthest_chapter_id,progress_percent,updated_at")
    .eq("user_id", user.id)
    .maybeSingle();

  if (error) return null;
  return data as StudentProgressSnapshot | null;
}

export async function getServerFurthestChapterId(): Promise<string | null> {
  const snapshot = await getServerStudentProgress();
  if (snapshot?.furthest_chapter_id) return snapshot.furthest_chapter_id;
  return getFirstChapterId();
}
