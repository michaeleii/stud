import {
  Course,
  PartialCourse,
  updateCourse as updateCourseApi,
} from "@/services/apiCourse";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useUpdateCourse() {
  const queryClient = useQueryClient();
  const { mutate: updateCourse, isLoading } = useMutation({
    mutationKey: ["updateCourse"],
    mutationFn: ({ id, course }: { id: Course["id"]; course: PartialCourse }) =>
      updateCourseApi(id, course),
    onSuccess: async () => {
      await queryClient.invalidateQueries(["course"]);
    },
  });
  return { updateCourse, isLoading };
}
