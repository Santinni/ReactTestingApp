import { getEpisode } from '@/api/episodes';
import { useQuery } from '@tanstack/react-query';

export default function useGetEpisode(id: number) {
  return useQuery({
    queryKey: ["episodes", id],
    queryFn: () => getEpisode(id),
  });
}
