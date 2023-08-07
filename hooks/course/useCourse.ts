import { getCourse } from "@/services/apiCourse";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";

export function useCourse() {
  const router = useRouter();
  const id = router.query.id;
  const { data: course, isLoading } = useQuery({
    queryKey: ["course"],
    queryFn: () => getCourse(Number(id)),
    enabled: !!id,
  });
  return { course, isLoading };
}
