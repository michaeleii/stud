import supabase from "./supabase";

export type CourseWithCount = Awaited<ReturnType<typeof getCourses>>[0];
export type Course = Omit<CourseWithCount, "totalCount" | "completedCount">;
export type PartialCourse = Omit<Course, "id" | "created_at" | "schedule">;

export async function createCourse(course: PartialCourse) {
  const { error } = await supabase.from("course").insert([course]);
  if (error) throw error;
}

export async function getCourses() {
  const { data, error } = await supabase.from("course").select("*");
  if (error) throw error;

  const courses = await Promise.all(
    data.map(async (course) => {
      const { count: totalCount, error } = await supabase
        .from("task")
        .select("*", { count: "exact" })
        .match({ course_id: course.id });
      const { count: completedCount, error: completedTasksError } =
        await supabase
          .from("task")
          .select("*", { count: "exact" })
          .match({ course_id: course.id, is_completed: true });
      if (error) throw error;
      if (completedTasksError) throw completedTasksError;
      return { ...course, totalCount, completedCount };
    })
  );
  return courses;
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
  const { error: taskError } = await supabase
    .from("task")
    .delete()
    .match({ course_id: id });
  if (taskError) throw taskError;
  const { error } = await supabase.from("course").delete().match({ id });
  if (error) throw error;
}
