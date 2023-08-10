import supabase from "./supabase";

export type Course = Awaited<ReturnType<typeof getCourses>>[0];
export type PartialCourse = Omit<Course, "id" | "created_at">;

export async function createCourse(course: PartialCourse) {
  const { error } = await supabase.from("course").insert([course]);
  if (error) throw error;
}

export async function getCourses() {
  const { data, error } = await supabase.from("course").select("*");
  if (error) throw error;
  return data;
}

export async function getCourse(id: Course["id"]) {
  const { data, error } = await supabase
    .from("course")
    .select("*")
    .match({ id })
    .single();
  if (error) throw error;
  return data;
}

export async function updateCourse(id: Course["id"], course: PartialCourse) {
  const { error } = await supabase.from("course").update(course).match({ id });
  if (error) throw error;
}

export async function deleteCourse(id: Course["id"]) {
  const { error } = await supabase.from("course").delete().match({ id });
  if (error) throw error;
}
