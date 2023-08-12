import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import CountdownTimer from "./CountdownTimer";

type Colors = {
  0: `#${string}`;
} & {
  1: `#${string}`;
} & `#${string}`[];

const focusColors: Colors = ["#dc2626", "#dc2626"];
const shortBreakColors: Colors = ["#22c55e", "#22c55e"];
const longBreakColors: Colors = ["#3b82f6", "#3b82f6"];

export default function Pomodoro() {
  return (
    <Tabs defaultValue="focus" className="mx-auto w-[400px]">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="focus">Focus</TabsTrigger>
        <TabsTrigger value="short-break">Short break</TabsTrigger>
        <TabsTrigger value="long-break">Long break</TabsTrigger>
      </TabsList>

      <TabsContent value="focus">
        <CountdownTimer
          initialTime={25 * 60}
          finishedElement={
            <div className="text-xl font-bold text-emerald-800 dark:text-emerald-500">
              Time to take a break!
            </div>
          }
          colors={focusColors}
        />
      </TabsContent>
      <TabsContent value="short-break">
        <CountdownTimer
          initialTime={5 * 60}
          finishedElement={
            <div className="text-xl font-bold text-red-800 dark:text-red-400">
              Time to study!
            </div>
          }
          colors={shortBreakColors}
        />
      </TabsContent>
      <TabsContent value="long-break">
        <CountdownTimer
          initialTime={15 * 60}
          finishedElement={
            <div className="text-xl font-bold text-red-800 dark:text-red-400">
              Time to study!
            </div>
          }
          colors={longBreakColors}
        />
      </TabsContent>
    </Tabs>
  );
}
