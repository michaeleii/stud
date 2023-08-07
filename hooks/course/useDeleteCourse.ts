import { deleteCourse as deleteCourseApi } from "@/services/apiCourse";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/router";

export function useDeleteCourse() {
  const router = useRouter();
  const queryClient = useQueryClient();
  const { mutate: deleteCourse, isLoading } = useMutation({
    mutationKey: ["deleteCourse"],
    mutationFn: deleteCourseApi,
    onSuccess: async () => {
      router.replace("/courses");
      await queryClient.invalidateQueries(["courses"]);
    },
  });
  return { deleteCourse, isLoading };
}
