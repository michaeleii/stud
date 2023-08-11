import { Button } from "./ui/button";
import { Input } from "./ui/input";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Course } from "@/services/apiCourse";
import { useState } from "react";
import { useUpdateCourse } from "@/hooks/course/useUpdateCourse";
import { colors, variants } from "./ScheduleItem";

function EditCourseSheet({ course }: { course: Course }) {
  const { updateCourse, isLoading } = useUpdateCourse();
  const [name, setName] = useState(course.name);
  const [description, setDescription] = useState(course.description);
  const [color, setColor] = useState(course.color);
  const onSubmit = () => {
    if (!name || !description || !color) return;
    if (
      name === course.name &&
      description === course.description &&
      color === course.color
    )
      return;
    const updatedCourse = { name, description, color };
    updateCourse({ id: course.id, course: updatedCourse });
  };
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
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="description" className="text-right">
              Description
            </Label>
            <Textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="color" className="text-right">
              Color
            </Label>
            <div className="col-span-3">
              <Select
                onValueChange={(value) => setColor(value)}
                defaultValue={color ?? ""}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select a color..." />
                </SelectTrigger>

                <SelectContent>
                  {colors.map((color) => {
                    return (
                      <SelectItem key={color} value={color}>
                        <div className="flex gap-2">
                          <div
                            className={`h-5 w-5 rounded-full ${variants[color]}`}
                          ></div>
                          <span>{color}</span>
                        </div>
                      </SelectItem>
                    );
                  })}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit" disabled={isLoading} onClick={onSubmit}>
              Save changes
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
export default EditCourseSheet;
