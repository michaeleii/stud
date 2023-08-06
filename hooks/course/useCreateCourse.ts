import { createCourse as createCourseApi } from "@/services/apiCourse";
import { useMutation } from "@tanstack/react-query";

export function useCreateCourse() {
  const { mutate: createCourse, isLoading } = useMutation({
    mutationKey: ["createCourse"],
    mutationFn: createCourseApi,
  });
  return { createCourse, isLoading };
}
