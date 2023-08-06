import { getCourse } from "@/services/apiCourse";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";

export function useCourse() {
  const router = useRouter();
  const id = router.query.id;
  if (!id) throw new Error("Missing id");
  const { data: course, isLoading } = useQuery({
    queryKey: ["course"],
    queryFn: () => getCourse(+id),
  });
  return { course, isLoading };
}
