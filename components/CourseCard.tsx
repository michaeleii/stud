import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

function CourseCard({ course }: { course: { name: string } }) {
  const tasksDone = 3;
  const tasksTotal = 5;
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
