import { useUser } from "@/hooks/authentication/useUser";
import PageHeading from "./PageHeading";

// Get the current timestamp in milliseconds
const currentTimestamp = Date.now();

// Create a new Date object using the current timestamp
const currentDate = new Date(currentTimestamp);

// Extract the hour from the Date object
const currentHour = currentDate.getHours();

// Function to determine the time of day
function getTimeOfDay(hour: number) {
  if (hour >= 5 && hour < 12) {
    return "morning";
  } else if (hour >= 12 && hour < 15) {
    return "afternoon";
  } else if (hour >= 15 && hour < 20) {
    return "evening";
  } else {
    return "night";
  }
}

// Get the time of day

function Greeting() {
  const { user, isLoadingUser } = useUser();
  const timeOfDay = getTimeOfDay(currentHour);
  const greeting = `Good ${timeOfDay},`;
  return (
    <PageHeading>
      {greeting}{" "}
      {(!isLoadingUser && user && user.user_metadata.fullName) ?? "User"}
    </PageHeading>
  );
}
export default Greeting;
