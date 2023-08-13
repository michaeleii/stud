import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/router";

import { logout as logoutApi } from "@/services/apiAuth";

export function useLogout() {
  const router = useRouter();
  const queryClient = useQueryClient();

  const { mutate: logout, isLoading: isLoggingOut } = useMutation({
    mutationFn: logoutApi,
    onSuccess: () => {
      queryClient.removeQueries();
      router.push("/login");
    },
    onError: () => {
      console.log("Error logging out");
    },
  });
  return { logout, isLoggingOut };
}
