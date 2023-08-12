import {
  ResponsiveContainer,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
} from "recharts";
import { useState } from "react";
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
import { useStudy } from "@/hooks/study/useStudy";
import Loading from "./Loading";
import CourseCard from "./CourseCard";
import Link from "next/link";
import LoadingPage from "./LoadingPage";

function Dashboard() {
  const { courses, isLoading } = useCourses();
  const [date, setDate] = useState<Date | undefined>(new Date());
  const { studyData, isLoadingStudy } = useStudy();

  let todayCourseData: {
    id: number;
    name: string;
    time: string;
    color: string;
  }[] = [];

  if (isLoading) return <LoadingPage />;

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
      <div className="col-span-2 grid grid-cols-1 gap-2 xl:grid-cols-2">
        {courses &&
          courses.map((course) => (
            <Link key={course.id} href={`/courses/${course.id}`}>
              <CourseCard course={course} />
            </Link>
          ))}
      </div>
      <Card className="row-span-1 h-fit max-w-xs pt-5">
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
          </div>
        </CardContent>
      </Card>

      <Card className="col-span-2">
        <CardHeader>
          <h3 className="text-md font-medium tracking-tight">
            Study Time for Past 7 Days
          </h3>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer height={200}>
            <BarChart data={studyData}>
              <XAxis
                dataKey="day"
                strokeWidth={0}
                stroke="#888888"
                tick={{ fontSize: 12 }}
              />
              <YAxis
                unit="mins"
                strokeWidth={0}
                stroke="#888888"
                tick={{ fontSize: 12 }}
              />

              <Bar
                className="fill-red-400 dark:fill-red-700"
                dataKey="studyTime"
                name="Study time"
              />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}
export default Dashboard;
