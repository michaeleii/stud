import { useUser } from "@/hooks/authentication/useUser";
import { useRouter } from "next/router";
import { useEffect } from "react";
import LoadingFullPage from "./LoadingPage";

function AlreadyLoggedIn({ children }: { children: React.ReactNode }) {
  const { user, isLoadingUser } = useUser();
  const router = useRouter();
  useEffect(() => {
    if (!isLoadingUser && user) {
      router.replace("/");
    }
  }, [user, isLoadingUser, router]);

  return isLoadingUser || user ? <LoadingFullPage /> : children;
}
export default AlreadyLoggedIn;
