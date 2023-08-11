import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Calendar } from "@/components/ui/calendar";
import { Separator } from "./ui/separator";
import { formatDistanceDay, timeParser } from "@/helpers/time";
import { useCourses } from "@/hooks/course/useCourses";
import ScheduleItem from "./ScheduleItem";
import Loading from "./Loading";

function Dashboard() {
  const { courses, isLoading } = useCourses();
  const [date, setDate] = useState<Date | undefined>(new Date());

  let todayCourseData: {
    id: number;
    name: string;
    time: string;
    color: string;
  }[] = [];

  courses?.forEach((course) => {
    (course.schedule as { day: string; time: string }[])?.forEach(
      (schedule) => {
        if (schedule.day === date?.getDay().toString()) {
          todayCourseData.push({
            id: course.id,
            name: course.name,
            time: schedule.time,
            color: course.color ?? "blue",
          });
        }
      }
    );
  });

  const todayCourses = todayCourseData
    .sort((a, b) => {
      return (
        Number(a.time.split(":").join("")) - Number(b.time.split(":").join(""))
      );
    })
    .map((course) => {
      return {
        ...course,
        time: timeParser(course.time),
      };
    });

  return (
    <div className="mx-auto mt-10 grid max-w-7xl grid-cols-1 gap-5 xl:grid-cols-3">
      <Card className="col-span-2">
        <CardHeader>
          <h3 className="text-sm font-medium tracking-tight">Study Time</h3>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">chart</div>
        </CardContent>
      </Card>
      <Card className="row-span-2 max-w-xs pt-5">
        <CardContent>
          <div className="flex justify-center">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              required
              className="p-0"
            />
          </div>
          <Separator className="my-5" />

          <CardTitle className="my-1 ml-1">
            {date && formatDistanceDay(date)}
          </CardTitle>
          <CardDescription className="ml-1 text-lg">
            {date?.toLocaleString("en-US", {
              weekday: "long",
              month: "long",
              day: "numeric",
            })}
          </CardDescription>
          <div className="ml-2 mt-5 flex flex-col gap-4">
            {todayCourses.map((course) => (
              <ScheduleItem
                key={course.id}
                time={course.time}
                name={course.name}
                color={course.color}
              />
            ))}
            {isLoading && <Loading />}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
export default Dashboard;
