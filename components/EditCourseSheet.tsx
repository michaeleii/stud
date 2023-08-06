import { Sheet } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import {
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
  SheetClose,
} from "./ui/sheet";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Course } from "@/services/apiCourse";

function EditCourseSheet({ course }: { course: Course }) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="secondary">Edit</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Edit course</SheetTitle>
          <SheetDescription>
            Make changes to your course here. Click save when you&apos;re done.
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
  );
}
export default EditCourseSheet;
