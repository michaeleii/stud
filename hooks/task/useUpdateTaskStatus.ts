import {
  Task,
  updateTaskStatus as updateTaskStatusApi,
} from "@/services/apiTask";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useUpdateTaskStatus() {
  const queryClient = useQueryClient();
  const { mutate: updateTaskStatus, isLoading: isUpdating } = useMutation({
    mutationKey: ["updateTaskStatus"],
    mutationFn: ({
      id,
      is_completed,
    }: {
      id: Task["id"];
      is_completed: boolean;
    }) => updateTaskStatusApi(id, is_completed),
    onSuccess: async () => {
      await queryClient.invalidateQueries(["tasks"]);
    },
  });
  return { updateTaskStatus, isUpdating };
}
