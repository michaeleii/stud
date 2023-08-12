import {
  Task,
  updateTaskStatus as updateTaskStatusApi,
} from "@/services/apiTask";
import { useMutation } from "@tanstack/react-query";

export function useUpdateTaskStatus() {
  const { mutate: updateTaskStatus, isLoading: isUpdating } = useMutation({
    mutationKey: ["updateTaskStatus"],
    mutationFn: ({
      id,
      is_completed,
    }: {
      id: Task["id"];
      is_completed: boolean;
    }) => updateTaskStatusApi(id, is_completed),
  });
  return { updateTaskStatus, isUpdating };
}
