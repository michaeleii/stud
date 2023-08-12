import { getTasks } from "@/services/apiTask";
import { useQuery } from "@tanstack/react-query";

export function useTasks(id: number) {
  const { data: tasks, isLoading } = useQuery({
    queryKey: ["tasks"],
    queryFn: () => getTasks(id),
    enabled: !!id,
  });

  return { tasks, isLoading };
}
