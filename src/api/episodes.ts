import axiosInstance from './config';

export function getEpisodes(page = 1) {
  return axiosInstance.get("/episode", {
    params: {
      page,
    },
  });
}

export function getEpisode(episodeId: number) {
  return axiosInstance.get("/episode", {
    params: {
      id: episodeId,
    },
  });
}
