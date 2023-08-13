import { getCourse } from "@/services/apiCourse";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";

export function useCourse(id: number) {
  const {
    data: course,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["course"],
    queryFn: () => getCourse(id),
    enabled: !!id,
    retry: false,
  });

  return { course, isLoading, error };
}
