import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import { useReducer } from "react";

enum TimeActionKind {
  STARTTIME = "STARTTIME",
  FINISH = "FINISH",
  PAUSE = "PAUSE",
  RESUME = "RESUME",
  RESET = "RESET",
}
type StartTime = { type: TimeActionKind.STARTTIME; payload: number };
type Finish = { type: TimeActionKind.FINISH };
type Pause = { type: TimeActionKind.PAUSE };
type Resume = { type: TimeActionKind.RESUME };
type Restart = { type: TimeActionKind.RESET; payload: number };

type TimeAction = StartTime | Finish | Pause | Resume | Restart;

interface TimeState {
  startTime: number;
  zeroRemainingTime: boolean;
  play: boolean;
  startPlaying: boolean;
  reset: number;
}
const initialState: TimeState = {
  startTime: 3,
  zeroRemainingTime: false,
  play: false,
  startPlaying: false,
  reset: 1,
};

function reducer(state: TimeState, action: TimeAction) {
  const { type } = action;

  switch (type) {
    case TimeActionKind.STARTTIME:
      return { ...state, startTime: action.payload };

    case TimeActionKind.FINISH:
      return { ...state, zeroRemainingTime: true };

    case TimeActionKind.PAUSE:
      return { ...state, play: false };

    case TimeActionKind.RESUME:
      return { ...state, play: true, startPlaying: true };

    case TimeActionKind.RESET:
      return {
        ...state,
        zeroRemainingTime: false,
        play: false,
        startPlaying: false,
        reset: action.payload,
      };
  }
}

export default function Controls() {
  const [
    { startTime, zeroRemainingTime, play, startPlaying, reset },
    dispatch,
  ] = useReducer<React.Reducer<TimeState, TimeAction>>(reducer, initialState);

  const handleStartTime = (startTime: number) => {
    return dispatch({ type: TimeActionKind.STARTTIME, payload: startTime });
  };
  const finish = () => {
    dispatch({ type: TimeActionKind.FINISH });
    return { shouldRepeat: false, delay: 1 };
  };
  const pause = () => {
    return dispatch({ type: TimeActionKind.PAUSE });
  };
  const resume = () => {
    return dispatch({ type: TimeActionKind.RESUME });
  };
  const handleReset = () => {
    return dispatch({ type: TimeActionKind.RESET, payload: Math.random() });
  };

  return (
    <Tabs defaultValue="pomo" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger
          value="pomo"
          onClick={() => {
            handleReset();
            handleStartTime(3);
          }}
        >
          Pomodoro
        </TabsTrigger>
        <TabsTrigger
          value="short-break"
          onClick={() => {
            handleReset();
            handleStartTime(2);
          }}
        >
          Short break
        </TabsTrigger>
        <TabsTrigger
          value="long-break"
          onClick={() => {
            handleReset();
            handleStartTime(1);
          }}
        >
          Long break
        </TabsTrigger>
      </TabsList>

      <TabsContent value="pomo">
        <Card className="h-[380px]">
          <CardContent className="flex h-full flex-col items-center justify-between">
            <div className="mt-5">
              <CountdownCircleTimer
                strokeWidth={18}
                size={250}
                key={reset}
                isPlaying={play}
                duration={startTime}
                colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
                colorsTime={[7, 5, 2, 0]}
                onComplete={finish}
              >
                {({ remainingTime }: { remainingTime: number }) => {
                  const minutes = Math.floor(remainingTime / 60);
                  const seconds = remainingTime % 60;
                  if (remainingTime === 0) {
                    return (
                      <p className="text-xl font-bold text-red-600">
                        Time for a break!
                      </p>
                    );
                  }
                  return (
                    <h2 className="text-5xl font-bold">{`${
                      minutes < 10 ? "0" + minutes : minutes
                    }:${seconds < 10 ? "0" + seconds : seconds}`}</h2>
                  );
                }}
              </CountdownCircleTimer>
            </div>
            {!zeroRemainingTime && (
              <Button
                onClick={() => {
                  play ? pause() : resume();
                }}
              >
                {play ? "Pause" : !startPlaying ? "Let's study" : "Resume"}
              </Button>
            )}
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="short-break">
        <Card className="h-[380px]">
          <CardContent className="flex h-full flex-col items-center justify-between">
            <div className="mt-5">
              <CountdownCircleTimer
                strokeWidth={18}
                size={250}
                key={reset}
                isPlaying={play}
                duration={startTime}
                colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
                colorsTime={[7, 5, 2, 0]}
                onComplete={finish}
              >
                {({ remainingTime }: { remainingTime: number }) => {
                  const minutes = Math.floor(remainingTime / 60);
                  const seconds = remainingTime % 60;
                  if (remainingTime === 0) {
                    return (
                      <p className="text-xl font-bold text-red-600">
                        Break is over!
                      </p>
                    );
                  }
                  return (
                    <h2 className="text-5xl font-bold">{`${
                      minutes < 10 ? "0" + minutes : minutes
                    }:${seconds < 10 ? "0" + seconds : seconds}`}</h2>
                  );
                }}
              </CountdownCircleTimer>
            </div>
            {!zeroRemainingTime && (
              <Button
                onClick={() => {
                  play ? pause() : resume();
                }}
              >
                {play ? "Pause" : !startPlaying ? "Take a break" : "Resume"}
              </Button>
            )}
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="long-break">
        <Card className="h-[380px]">
          <CardContent className="flex h-full flex-col items-center justify-between">
            <div className="mt-5">
              <CountdownCircleTimer
                strokeWidth={18}
                size={250}
                key={reset}
                isPlaying={play}
                duration={startTime}
                colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
                colorsTime={[7, 5, 2, 0]}
                onComplete={finish}
              >
                {({ remainingTime }: { remainingTime: number }) => {
                  const minutes = Math.floor(remainingTime / 60);
                  const seconds = remainingTime % 60;
                  if (remainingTime === 0) {
                    return (
                      <p className="text-xl font-bold text-red-600">
                        Break is over!
                      </p>
                    );
                  }
                  return (
                    <h2 className="text-5xl font-bold">{`${
                      minutes < 10 ? "0" + minutes : minutes
                    }:${seconds < 10 ? "0" + seconds : seconds}`}</h2>
                  );
                }}
              </CountdownCircleTimer>
            </div>
            {!zeroRemainingTime && (
              <Button
                onClick={() => {
                  play ? pause() : resume();
                }}
              >
                {play ? "Pause" : !startPlaying ? "Take a break" : "Resume"}
              </Button>
            )}
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
