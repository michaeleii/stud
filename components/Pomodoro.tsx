import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import CountdownTimer from "./CountdownTimer";

type Colors = {
  0: `#${string}`;
} & {
  1: `#${string}`;
} & `#${string}`[];

const focusColors: Colors = ["#A30000", "#F7B801", "#06b6d4", "#10b981"];
const breakColors: Colors = ["#10b981", "#06b6d4", "#F7B801", "#A30000"];

export default function Pomodoro() {
  return (
    <Tabs defaultValue="focus" className="mx-auto my-5 w-[400px]">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="focus">Focus</TabsTrigger>
        <TabsTrigger value="short-break">Short break</TabsTrigger>
        <TabsTrigger value="long-break">Long break</TabsTrigger>
      </TabsList>

      <TabsContent value="focus">
        <CountdownTimer
          initialTime={25 * 60}
          finishedText="Time to take a break!"
          colors={focusColors}
        />
      </TabsContent>
      <TabsContent value="short-break">
        <CountdownTimer
          initialTime={5 * 60}
          finishedText="Time to study!"
          colors={breakColors}
        />
      </TabsContent>
      <TabsContent value="long-break">
        <CountdownTimer
          initialTime={10}
          finishedText="Time to study!"
          colors={breakColors}
        />
      </TabsContent>
    </Tabs>
  );
}
