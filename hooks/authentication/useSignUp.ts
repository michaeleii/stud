import { useMutation } from "@tanstack/react-query";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/router";

import { signUp as signUpApi } from "@/services/apiAuth";

export function useSignUp() {
  const { toast } = useToast();
  const router = useRouter();

  const { mutate: signUp, isLoading: isSigningUp } = useMutation({
    mutationFn: signUpApi,
    onSuccess: () => {
      toast({
        title: "Account successfully created!",
        style: { position: "sticky", bottom: 0 },
      });
      router.push("/login");
    },
    onError: () => {},
  });
  return { signUp, isSigningUp };
}
