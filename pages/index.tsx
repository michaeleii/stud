import Dashboard from "@/components/Dashboard";
import Greeting from "@/components/Greeting";
import ProtectedRoute from "@/components/ProtectedRoute";

export default function Home() {
  return (
    <ProtectedRoute>
      <Greeting />
      <Dashboard />
    </ProtectedRoute>
  );
}
