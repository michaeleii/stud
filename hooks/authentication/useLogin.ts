import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/router";

import { login as loginApi } from "@/services/apiAuth";

export function useLogin() {
  const router = useRouter();

  const { mutate: login, isLoading: isLoggingIn } = useMutation({
    mutationFn: ({ email, password }: { email: string; password: string }) =>
      loginApi({ email, password }),
    onSuccess: () => {
      router.push("/");
    },
    onError: (error) => {
      console.log("Provided email or password is incorrect");
    },
  });
  return { login, isLoggingIn };
}
