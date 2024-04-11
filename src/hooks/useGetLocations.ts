import getLocations from "@/api/locations";
import { useQuery } from "@tanstack/react-query";

export default function useGetLocations(page?: number) {
  return useQuery({
    queryKey: ["locations", page],
    queryFn: () => getLocations(page),
  });
}
