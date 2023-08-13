import { useUser } from "@/hooks/authentication/useUser";
import { useRouter } from "next/router";
import { useEffect } from "react";
import LoadingFullPage from "./LoadingPage";

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { user, isLoadingUser } = useUser();
  const router = useRouter();
  useEffect(() => {
    if (!isLoadingUser && !user) {
      router.replace("/landing");
    }
  }, [user, isLoadingUser, router]);

  return isLoadingUser || !user ? <LoadingFullPage /> : children;
}
export default ProtectedRoute;
