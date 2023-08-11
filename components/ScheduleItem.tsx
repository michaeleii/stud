function ScheduleItem({ time, name }: { time: string; name: string }) {
  return (
    <div className="flex flex-col">
      <div className="text-lg font-medium tracking-tight">{time}</div>
      <div className="flex items-center gap-5">
        <div className={`h-5 w-1 rounded-full bg-blue-400`}></div>
        <div className="text-lg font-medium tracking-tight">{name}</div>
      </div>
    </div>
  );
}
export default ScheduleItem;
