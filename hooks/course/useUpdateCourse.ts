import {
  PartialCourse,
  updateCourse as updateCourseApi,
} from "@/services/apiCourse";
import { useMutation } from "@tanstack/react-query";

export function useUpdateCourse() {
  const { mutate: updateCourse, isLoading } = useMutation({
    mutationKey: ["updateCourse"],
    mutationFn: ({ id, course }: { id: string; course: PartialCourse }) =>
      updateCourseApi(id, course),
  });
  return { updateCourse, isLoading };
}