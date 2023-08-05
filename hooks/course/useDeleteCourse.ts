import { deleteCourse as deleteCourseApi } from "@/services/apiCourse";
import { useMutation } from "@tanstack/react-query";

export function useDeleteCourse() {
  const { mutate: deleteCourse, isLoading } = useMutation({
    mutationKey: ["deleteCourse"],
    mutationFn: deleteCourseApi,
  });
  return { deleteCourse, isLoading };
}
