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
import { formatDistanceToNow } from "date-fns";

function formatDistanceDay(date: Date): string {
  const oneDay = 1000 * 3600 * 24;
  const distance = Date.now() - date.getTime();
  if (distance < oneDay && distance >= 0) {
    return "Today";
  }
  if (distance < 2 * oneDay && distance > 0) {
    return "Yesterday";
  }

  if (distance > -1 * oneDay && distance < 0) {
    return "Tomorrow";
  }
  let result = formatDistanceToNow(date, { addSuffix: true });
  result = result[0].toUpperCase() + result.slice(1);
  return result;
}

function Dashboard() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  return (
    <div className="mt-10 grid grid-cols-1 gap-5 xl:grid-cols-3">
      <Card className="col-span-2">
        <CardHeader>
          <h3 className="text-sm font-medium tracking-tight">Study Time</h3>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">chart</div>
        </CardContent>
      </Card>
      <Card className="row-span-2 mx-auto pt-5">
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
          <div className="ml-2 mt-5 flex flex-col gap-2">
            <div className="grid grid-cols-2">
              <div className="text-lg font-medium tracking-tight">9:00 AM</div>
              <div className="flex items-center gap-5">
                <div className="h-5 w-1 rounded-full bg-blue-300"></div>
                <div className="text-lg font-medium tracking-tight">Math</div>
              </div>
            </div>
            <div className="grid grid-cols-2">
              <div className="text-lg font-medium tracking-tight">10:00 AM</div>
              <div className="flex items-center gap-5">
                <div className="h-5 w-1 bg-green-300"></div>
                <div className="text-lg font-medium tracking-tight">
                  Science
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2">
              <div className="text-lg font-medium tracking-tight">10:00 AM</div>
              <div className="flex items-center gap-5">
                <div className="h-5 w-1 rounded-full bg-red-300"></div>
                <div className="text-lg font-medium tracking-tight">
                  English
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
export default Dashboard;
