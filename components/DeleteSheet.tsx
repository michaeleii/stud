import { Button } from "./ui/button";
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
import { useDeleteCourse } from "@/hooks/course/useDeleteCourse";

function DeleteSheet({ id }: { id: number }) {
  const { deleteCourse, isLoading } = useDeleteCourse();
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button disabled={isLoading} variant="destructive">
          Delete
        </Button>
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
            <Button
              variant="destructive"
              disabled={isLoading}
              onClick={() => deleteCourse(id)}
            >
              Delete
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
export default DeleteSheet;
