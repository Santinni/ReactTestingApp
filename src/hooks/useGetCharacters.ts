import { getCharacters } from "@/api/characters";
import { useQuery } from "@tanstack/react-query";

export default function useGetCharacters(page?: number) {
  return useQuery({
    queryKey: ["characters", page],
    queryFn: () => getCharacters(page),
  });
}
