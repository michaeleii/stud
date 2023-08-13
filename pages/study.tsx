import PageHeading from "@/components/PageHeading";
import Pomodoro from "@/components/Pomodoro";
import ProtectedRoute from "@/components/ProtectedRoute";

function Study() {
  return (
    <ProtectedRoute>
      <PageHeading>Pomodoro</PageHeading>
      <Pomodoro />
    </ProtectedRoute>
  );
}
export default Study;
