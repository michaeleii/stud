import { deleteCourse as deleteCourseApi } from "@/services/apiCourse";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";

export function useDeleteCourse() {
  const router = useRouter();
  const { mutate: deleteCourse, isLoading } = useMutation({
    mutationKey: ["deleteCourse"],
    mutationFn: deleteCourseApi,
    onSuccess: () => {
      router.replace("/courses");
    },
  });
  return { deleteCourse, isLoading };
}
