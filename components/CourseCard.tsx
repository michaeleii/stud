import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import Course from "@/types/Course";

function CourseCard({ course }: { course: Course }) {
  const tasksDone = course.tasks.filter((task) => task.done).length;
  const tasksTotal = course.tasks.length;
  return (
    <Card className="flex h-full flex-col">
      <CardHeader>
        <CardTitle>{course.name}</CardTitle>
      </CardHeader>
      <CardContent></CardContent>
      <CardFooter className="mt-auto">
        <p className="w-full">
          {tasksDone}/{tasksTotal} tasks done
        </p>
        <Progress value={(tasksDone / tasksTotal) * 100} />
      </CardFooter>
    </Card>
  );
}
export default CourseCard;
