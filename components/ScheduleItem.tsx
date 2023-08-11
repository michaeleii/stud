export const colors = [
  "red",
  "orange",
  "yellow",
  "green",
  "teal",
  "blue",
  "purple",
  "pink",
] as const;

export type Variants = { [K in (typeof colors)[number]]: string };

export const variants = {
  red: "bg-red-400",
  orange: "bg-orange-400",
  yellow: "bg-yellow-400",
  green: "bg-green-400",
  teal: "bg-teal-400",
  blue: "bg-blue-500",
  purple: "bg-purple-500",
  pink: "bg-pink-400",
};

function ScheduleItem({
  time,
  name,
  color,
}: {
  time: string;
  name: string;
  color: string;
}) {
  return (
    <div className="flex flex-col">
      <div className="text-md flex items-center gap-2 font-medium tracking-tight">
        <div
          className={`h-5 w-1 rounded-full ${
            variants[color as keyof Variants]
          }`}
        ></div>
        {time}
      </div>
      <div className="flex items-center gap-5">
        <div className="text-md font-medium tracking-tight">{name}</div>
      </div>
    </div>
  );
}
export default ScheduleItem;
