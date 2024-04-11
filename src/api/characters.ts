import axiosInstance from "./config";

export function getCharacters(page = 1) {
  return axiosInstance.get("/character", {
    params: {
      page,
    },
  });
}

export function getCharacter(characterId: number) {
  return axiosInstance.get(`/character/${characterId}`);
}
