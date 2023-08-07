import { set } from "react-hook-form";
import { Button } from "./ui/button";

function TimerButton({
  isPlaying,
  isStarted,
  isCompleted,
  setIsPlaying,
  setIsStarted,
  setIsCompleted,
}: {
  isPlaying: boolean;
  isStarted: boolean;
  isCompleted: boolean;
  setIsPlaying: (isPlaying: boolean) => void;
  setIsStarted: (isStarted: boolean) => void;
  setIsCompleted: (isCompleted: boolean) => void;
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
          }}
        >
          Reset
        </Button>
      )}
    </>
  );
}
export default TimerButton;
