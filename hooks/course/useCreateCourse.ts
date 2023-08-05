import { createCourse as createCourseApi } from "@/services/apiCourse";
import { useMutation } from "@tanstack/react-query";

export function useCreateCourse() {
  const { mutate, isLoading } = useMutation({
    mutationKey: ["createCourse"],
    mutationFn: createCourseApi,
  });
  return { mutate, isLoading };
}
