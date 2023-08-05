import CourseCard from "@/components/CourseCard";
import { Button } from "@/components/ui/button";
import { courses } from "@/data/courses";
import { Plus } from "lucide-react";
import Link from "next/link";

function Courses() {
  return (
    <>
      <div className="flex items-center gap-5">
        <h1>Courses ({courses.length})</h1>
        <Button className="ml-auto space-x-2">
          <Plus />
          <span>Add new course</span>
        </Button>
      </div>

      <section className="p-10">
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
