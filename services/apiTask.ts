import { Course } from "./apiCourse";
import supabase from "./supabase";

type Task = Awaited<ReturnType<typeof getTasks>>[0];

async function getTasks(course_id: Course["id"]) {
  const { data, error } = await supabase
    .from("task")
    .select("*")
    .match({ course_id });
  if (error) throw error;
  return data;
}

export async function createTask(name: Task["name"], course_id: Course["id"]) {
  const newTask = { name, course_id };
  const { error } = await supabase.from("task").insert([newTask]);
  if (error) throw error;
}

export async function deleteTask(id: Task["id"]) {
  const { error } = await supabase.from("task").delete().match({ id });
  if (error) throw error;
}
