import { getCourse } from "@/services/apiCourse";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";

export function useCourse(id: number) {
  const router = useRouter();
  const {
    data: course,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["course"],
    queryFn: () => getCourse(id),
    enabled: !!id,
  });
  if (isError) router.push("/404");

  return { course, isLoading };
}
