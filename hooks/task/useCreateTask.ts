import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/router";

import { createTask as createTaskApi } from "@/services/apiTask";
import { Task } from "@/services/apiTask";
import { Course } from "@/services/apiCourse";

export function useCreateTask() {
  const queryClient = useQueryClient();
  const router = useRouter();
  const { mutate: createTask, isLoading: isCreatingTask } = useMutation({
    mutationFn: ({
      name,
      course_id,
    }: {
      name: Task["name"];
      course_id: Course["id"];
    }) => createTaskApi(name, course_id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
    onError: (error) => {
      if (error instanceof Error) console.log(error.message);
    },
  });
  return { createTask, isCreatingTask };
}
