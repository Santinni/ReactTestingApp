import { useEffect } from "react";

import { getCharacters } from "@/api/characters";
import { useQueryClient } from "@tanstack/react-query";

export default function usePrefetchPage(pageNumber: number, isActive: boolean) {
  const queryClient = useQueryClient();
  useEffect(() => {
    const queryKey = ["characters", pageNumber];
    const isDataAlreadyCached = queryClient.getQueryData(queryKey);
    if (isActive && !isDataAlreadyCached) {
      queryClient.prefetchQuery({
        queryKey,
        queryFn: () => getCharacters(pageNumber),
      });
    }
  }, [pageNumber, queryClient, isActive]);
}
