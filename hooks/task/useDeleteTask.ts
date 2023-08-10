import { useQueryClient, useMutation } from "@tanstack/react-query";

import { deleteTask as deleteTaskApi } from "@/services/apiTask";
import { Task } from "@/services/apiTask";

export function useDeleteTask() {
  const queryClient = useQueryClient();
  const { mutate: deleteTask, isLoading: isDeletingTask } = useMutation({
    mutationFn: (id: Task["id"]) => deleteTaskApi(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
    onError: (error) => {
      if (error instanceof Error) console.log(error.message);
    },
  });
  return { deleteTask, isDeletingTask };
}
