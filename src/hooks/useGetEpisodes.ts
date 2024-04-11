import { getEpisodes } from '@/api/episodes';
import { useQuery } from '@tanstack/react-query';

export default function useGetEpisodes(page?: number) {
  return useQuery({
    queryKey: ["episodes", page],
    queryFn: () => getEpisodes(page),
  });
}
