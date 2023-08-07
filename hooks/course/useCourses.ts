import { getCourses } from "@/services/apiCourse";
import { useQuery } from "@tanstack/react-query";

export function useCourses() {
  const { data: courses, isLoading } = useQuery({
    queryKey: ["courses"],
    queryFn: getCourses,
  });
  return { courses, isLoading };
}
