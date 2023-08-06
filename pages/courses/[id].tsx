import { GetStaticPaths, GetStaticProps } from "next";

import PageHeading from "@/components/PageHeading";
import { Course, getCourse, getCourses } from "@/services/apiCourse";
import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export const getStaticPaths: GetStaticPaths = async () => {
  const courses = await getCourses();
  const paths = courses.map((course) => {
    return { params: { id: course.id.toString() } };
  });
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => {
  if (!context.params) return { props: {} };

  const id = context.params.id;
  if (!id || typeof id !== "string") return { props: {} };

  const course = await getCourse(+id);

  return {
    props: { course },
  };
};

function CourseDetails({ course }: { course: Course }) {
  return (
    <>
      <PageHeading>{course.name}</PageHeading>

      <h2 className="my-3 text-xl">{course.description}</h2>
      <div className="mt-5 space-x-2">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="secondary">Edit</Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Edit course</SheetTitle>
              <SheetDescription>
                Make changes to your course here. Click save when you&apos;re
                done.
              </SheetDescription>
            </SheetHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input id="name" value={course.name} className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="description" className="text-right">
                  Description
                </Label>
                <Textarea
                  id="description"
                  value={course.description}
                  className="col-span-3"
                />
              </div>
            </div>
            <SheetFooter>
              <SheetClose asChild>
                <Button type="submit">Save changes</Button>
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="destructive">Delete</Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Are you sure absolutely sure?</SheetTitle>
              <SheetDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </SheetDescription>
            </SheetHeader>
            <SheetFooter className="py-4">
              <SheetClose asChild>
                <Button variant="destructive">Delete</Button>
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
}
export default CourseDetails;
