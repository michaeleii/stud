import supabase from "./supabase";
export default interface Course {
  name: string;
  description: string;
}
export async function createCourse(course: Course) {
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
    .from("courses")
    .select("*")
    .match({ id })
    .single();
  if (error) {
    throw error;
  }
  return data;
}

export async function updateCourse(id: string, course: Course) {
  const { error } = await supabase.from("courses").update(course).match({ id });
  if (error) {
    throw error;
  }
}

export async function deleteCourse(id: string) {
  const { error } = await supabase.from("courses").delete().match({ id });
  if (error) {
    throw error;
  }
}
