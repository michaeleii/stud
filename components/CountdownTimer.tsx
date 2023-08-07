import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { useEffect, useState } from "react";
import TimerButton from "./TimerButton";

const formatTime = (seconds: number) => {
  const mins = Math.floor(seconds / 60)
    .toString()
    .padStart(2, "0");
  const secs = (seconds % 60).toString().padStart(2, "0");
  return `${mins}:${secs}`;
};

function CountdownTimer({
  initialTime,
  finishedText,
  colors,
}: {
  initialTime: number;
  finishedText: string;
  colors: {
    0: `#${string}`;
  } & {
    1: `#${string}`;
  } & `#${string}`[];
}) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isStarted, setIsStarted] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  const children = ({ remainingTime }: { remainingTime: number }) => {
    if (remainingTime === 0) {
      return (
        <div className="text-xl font-bold text-emerald-500 dark:text-emerald-300">
          {finishedText}
        </div>
      );
    }
    return (
      <div className="text-5xl font-bold">{formatTime(remainingTime)}</div>
    );
  };
  return (
    <Card className="text-center">
      <CardContent>
        <div className="my-5 flex justify-center">
          <CountdownCircleTimer
            strokeWidth={19}
            size={250}
            isPlaying={isPlaying}
            duration={initialTime}
            trailStrokeWidth={18}
            colors={colors}
            colorsTime={[initialTime, 5, 2, 0]}
            onComplete={() => setIsCompleted(true)}
          >
            {children}
          </CountdownCircleTimer>
        </div>

        <TimerButton
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
          isStarted={isStarted}
          setIsStarted={setIsStarted}
          isCompleted={isCompleted}
          setIsCompleted={setIsCompleted}
        />
      </CardContent>
    </Card>
  );
}
export default CountdownTimer;
