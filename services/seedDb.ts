// import { courses } from "@/data/courses";
// import supabase from "./supabase";

// export async function seedDB() {
//   const randomCourses = courses.map((course) => {
//     return {
//       name: course.name,
//       description: course.description,
//       color: course.color,
//       schedule: course.schedule,
//     };
//   });
//   const { error } = await supabase.from("course").insert(randomCourses);
//   if (error) throw error;
// }
