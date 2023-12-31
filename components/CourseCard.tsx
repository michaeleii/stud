import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { CourseWithCount } from "@/services/apiCourse";
import { useEffect, useState } from "react";
import { Variants, variants } from "./ScheduleItem";

function CourseCard({ course }: { course: CourseWithCount }) {
  const [progress, setProgress] = useState(0);
  const tasksDone = course.completedCount ?? 0;
  const tasksTotal = course.totalCount ?? 0;
  useEffect(() => {
    const timer = setTimeout(
      () => setProgress((tasksDone / tasksTotal) * 100),
      500
    );
    return () => clearTimeout(timer);
  }, [tasksDone, tasksTotal]);
  return (
    <Card className="flex h-full flex-col">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <div
            className={`h-full w-1 rounded-full ${
              variants[(course.color as keyof Variants) ?? "blue"]
            }`}
          ></div>
          {course.name}
        </CardTitle>
      </CardHeader>
      <CardContent></CardContent>
      <CardFooter className="mt-auto">
        {tasksTotal > 0 ? (
          <>
            <p className="w-full">
              {tasksDone}/{tasksTotal} tasks done
            </p>
            <Progress value={progress} />
          </>
        ) : (
          <p></p>
        )}
      </CardFooter>
    </Card>
  );
}
export default CourseCard;
