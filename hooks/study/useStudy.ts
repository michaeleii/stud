import { useQuery } from "@tanstack/react-query";

import { studyStats } from "@/data/studyStats";

export function useStudy() {
  const { data: studyData, isLoading: isLoadingStudy } = useQuery({
    queryKey: ["study"],
    queryFn: () => studyStats,
  });
  return { studyData, isLoadingStudy };
}
