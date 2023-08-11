import { formatDistanceToNow } from "date-fns";

export const timeParser = (time: string) => {
  const [hours, minutes] = time.split(":").map(Number);

  const suffix = hours >= 12 ? "PM" : "AM";
  return `${hours % 12 || 12}:${minutes.toString().padStart(2, "0")} ${suffix}`;
};

const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export const weekDayToString = (day: number) => weekdays[day];

export function formatDistanceDay(date: Date): string {
  const oneDay = 1000 * 3600 * 24;
  const distance = Date.now() - date.getTime();
  if (distance < oneDay && distance >= 0) {
    return "Today";
  }
  if (distance < 2 * oneDay && distance > 0) {
    return "Yesterday";
  }

  if (distance > -1 * oneDay && distance < 0) {
    return "Tomorrow";
  }
  let result = formatDistanceToNow(date, { addSuffix: true });
  result = result[0].toUpperCase() + result.slice(1);
  return result;
}
