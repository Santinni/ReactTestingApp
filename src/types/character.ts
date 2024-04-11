/* eslint-disable object-curly-newline */
interface ApiResponse {
  info: PageInfo;
  results: Character[];
}

interface PageInfo {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
}

interface Character {
  id: number;
  name: string;
  status: "Alive" | "Dead" | "unknown";
  species: string;
  type: string;
  gender: "Male" | "Female" | "unknown";
  origin: Origin;
  location: Location;
  image: string;
  episode: string[];
  url: string;
  created: string;
}

interface Origin {
  name: string;
  url: string;
}

interface Location {
  name: string;
  url: string;
}

export type { ApiResponse, Character, Location, Origin, PageInfo };
