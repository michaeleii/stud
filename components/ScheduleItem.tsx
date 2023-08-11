function ScheduleItem({ time, name }: { time: string; name: string }) {
  const variants = {
    purple: "bg-purple-500",
    blue: "bg-blue-500",
    green: "bg-green-400",
    red: "bg-red-400",
    yellow: "bg-yellow-400",
    pink: "bg-pink-400",
    orange: "bg-orange-400",
  };
  return (
    <div className="flex flex-col">
      <div className="flex items-center gap-2 text-lg font-medium tracking-tight">
        <div className={`h-5 w-1 rounded-full ${variants["orange"]}`}></div>
        {time}
      </div>
      <div className="flex items-center gap-5">
        <div className="text-lg font-medium tracking-tight">{name}</div>
      </div>
    </div>
  );
}
export default ScheduleItem;
