import supabase from "./supabase";

export type Course = Awaited<ReturnType<typeof getCourse>>;
export type PartialCourse = Pick<Course, "name" | "description">;

export async function createCourse(course: PartialCourse) {
  const { error } = await supabase.from("courses").insert([course]);
  if (error) {
    throw error;
  }
}

export async function getCourses() {
  const { data, error } = await supabase.from("course").select("*");
  if (error) {
    throw error;
  }
  return data;
}

export async function getCourse(id: string) {
  const { data, error } = await supabase
    .from("course")
    .select("*")
    .match({ id })
    .single();
  if (error) {
    throw error;
  }
  return data;
}

export async function updateCourse(id: string, course: PartialCourse) {
  const { error } = await supabase.from("course").update(course).match({ id });
  if (error) {
    throw error;
  }
}

export async function deleteCourse(id: string) {
  const { error } = await supabase.from("course").delete().match({ id });
  if (error) {
    throw error;
  }
}
