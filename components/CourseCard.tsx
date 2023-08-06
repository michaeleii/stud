import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useEffect, useState } from "react";

function CourseCard({ course }: { course: { name: string } }) {
  const [progress, setProgress] = useState(13);
  const tasksDone = 3;
  const tasksTotal = 5;
  useEffect(() => {
    const timer = setTimeout(
      () => setProgress((tasksDone / tasksTotal) * 100),
      500
    );
    return () => clearTimeout(timer);
  }, []);
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
        <Progress value={progress} />
      </CardFooter>
    </Card>
  );
}
export default CourseCard;
