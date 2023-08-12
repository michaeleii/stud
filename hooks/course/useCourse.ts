import { getCourse } from "@/services/apiCourse";
import { useQuery } from "@tanstack/react-query";

export function useCourse(id: number) {
  const { data: course, isLoading } = useQuery({
    queryKey: ["course"],
    queryFn: () => getCourse(id),
    enabled: !!id,
  });
  return { course, isLoading };
}
