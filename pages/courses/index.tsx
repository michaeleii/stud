import CourseCard from "@/components/CourseCard";
import PageHeading from "@/components/PageHeading";
import { Button } from "@/components/ui/button";
import { Course, getCourses } from "@/services/apiCourse";
import { seedDB } from "@/services/seedDb";
import { Plus } from "lucide-react";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import Link from "next/link";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import CreateCourseForm from "@/components/CreateCourseForm";

export const getStaticProps: GetStaticProps<{
  courses: Course[];
}> = async () => {
  const courses = await getCourses();
  return {
    props: { courses },
  };
};

function Courses({ courses }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <div className="flex items-center gap-5">
        <PageHeading>Courses ({courses.length})</PageHeading>

        {/* <Button className="space-x-2" onClick={seedDB}>
          Seed database
        </Button> */}
        <Dialog>
          <DialogTrigger asChild>
            <Button className="ml-auto space-x-2">
              <Plus className="h-5 w-5 stroke-primary-foreground" />
              <span>Add new course</span>
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Add a new course</DialogTitle>
              <DialogDescription>
                Create a new course here. Click create when you&apos;re done.
              </DialogDescription>
            </DialogHeader>
            <CreateCourseForm />
          </DialogContent>
        </Dialog>
      </div>

      <section className="pt-10">
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
