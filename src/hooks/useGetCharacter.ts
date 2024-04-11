import { getCharacter } from "@/api/characters";
import { useQuery } from "@tanstack/react-query";

export default function useGetCharacter(id: number) {
  return useQuery({
    queryKey: ["character", id],
    queryFn: () => getCharacter(id),
  });
}
