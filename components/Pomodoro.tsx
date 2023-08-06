import Controls from "./Controls";
import Header from "./Header";

export default function Pomodoro() {
  return (
    <div className="flex flex-col items-center justify-center space-y-6">
      <Header title="Pomodoro" />
      <Controls />
    </div>
  );
}
