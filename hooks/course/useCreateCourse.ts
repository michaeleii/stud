import { createCourse as createCourseApi } from "@/services/apiCourse";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useCreateCourse() {
  const queryClient = useQueryClient();
  const { mutate: createCourse, isLoading } = useMutation({
    mutationKey: ["createCourse"],
    mutationFn: createCourseApi,
    onSuccess: async () => {
      await queryClient.invalidateQueries(["courses"]);
    },
  });
  return { createCourse, isLoading };
}
