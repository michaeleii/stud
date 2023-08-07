import { set } from "react-hook-form";
import { Button } from "./ui/button";
import { Dispatch, SetStateAction } from "react";

function TimerButton({
  isPlaying,
  isStarted,
  isCompleted,
  setIsPlaying,
  setIsStarted,
  setIsCompleted,
  setKey,
}: {
  isPlaying: boolean;
  isStarted: boolean;
  isCompleted: boolean;
  setIsPlaying: (isPlaying: boolean) => void;
  setIsStarted: (isStarted: boolean) => void;
  setIsCompleted: (isCompleted: boolean) => void;
  setKey: Dispatch<SetStateAction<number>>;
}) {
  const className = "w-full";
  return (
    <>
      {!isPlaying && !isStarted && !isCompleted && (
        <Button
          className={className}
          onClick={() => {
            setIsPlaying(true);
            setIsStarted(true);
          }}
        >
          Start
        </Button>
      )}
      {isPlaying && isStarted && !isCompleted && (
        <Button
          variant="secondary"
          className={className}
          onClick={() => {
            setIsPlaying(false);
          }}
        >
          Pause
        </Button>
      )}
      {!isPlaying && isStarted && !isCompleted && (
        <Button
          className={className}
          onClick={() => {
            setIsPlaying(true);
          }}
        >
          Resume
        </Button>
      )}
      {isCompleted && (
        <Button
          className={className}
          onClick={() => {
            setIsPlaying(false);
            setIsStarted(false);
            setIsCompleted(false);
            setKey((prevKey) => prevKey + 1);
          }}
        >
          Reset
        </Button>
      )}
    </>
  );
}
export default TimerButton;
