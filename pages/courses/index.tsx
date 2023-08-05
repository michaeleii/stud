import CourseCard from "@/components/CourseCard";
import PageHeading from "@/components/PageHeading";
import { Button } from "@/components/ui/button";
import { courses } from "@/data/courses";
import Course from "@/types/Course";
import { Plus } from "lucide-react";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import Link from "next/link";

export const API_URL = "https://my-json-server.typicode.com/michaeleii/stud";

export const getStaticProps: GetStaticProps<{
  courses: Course[];
}> = async () => {
  const res = await fetch(`${API_URL}/courses`);
  const courses = await res.json();
  return {
    props: { courses },
  };
};

function Courses({ courses }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <div className="flex items-center gap-5">
        <PageHeading>Courses ({courses.length})</PageHeading>
        <Button className="ml-auto space-x-2">
          <Plus />
          <span>Add new course</span>
        </Button>
      </div>

      <section className="p-5 pt-10 xl:p-10">
        <ul className="grid-rows-auto grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
          {courses.map((course) => (
            <li key={course.id}>
              <Link href={`/courses/${course.id}`}>
                <CourseCard course={course} />
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
export default Courses;
