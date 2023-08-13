import CourseCard from "@/components/CourseCard";
import PageHeading from "@/components/PageHeading";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Link from "next/link";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import CreateCourseForm from "@/components/CreateCourseForm";
import { useCourses } from "@/hooks/course/useCourses";
import LoadingPage from "@/components/LoadingPage";
import { useUser } from "@/hooks/authentication/useUser";
import { useEffect } from "react";
import { useRouter } from "next/router";
import ProtectedRoute from "@/components/ProtectedRoute";
// import { seedDB } from "@/services/seedDb";

function Courses() {
  const { courses, isLoading } = useCourses();

  if (isLoading) {
    return <LoadingPage />;
  }
  return (
    <ProtectedRoute>
      <div className="flex items-center gap-5">
        <PageHeading>Courses ({courses?.length})</PageHeading>
        {/* <Button onClick={seedDB}>SeedDb</Button> */}
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
          {courses && courses.length !== 0 ? (
            courses.map((course) => (
              <li key={course.id}>
                <Link href={`/courses/${course.id}`}>
                  <CourseCard course={course} />
                </Link>
              </li>
            ))
          ) : (
            <div className="text-center">You have no courses 😅</div>
          )}
        </ul>
      </section>
    </ProtectedRoute>
  );
}
export default Courses;
