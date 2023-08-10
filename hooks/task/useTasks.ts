import { getTasks } from "@/services/apiTask";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";

export function useTasks() {
  const router = useRouter();
  const id = router.query.id;
  const { data: tasks, isLoading } = useQuery({
    queryKey: ["tasks"],
    queryFn: () => getTasks(Number(id)),
    enabled: !!id,
  });
  return { tasks, isLoading };
}
