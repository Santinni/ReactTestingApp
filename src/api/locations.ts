import axiosInstance from "./config";

export default function getLocations(page = 1) {
  return axiosInstance.get("/location", {
    params: {
      page,
    },
  });
}
