import { apiCall } from "./api";
import type { TypeShow } from "./types";

export const getShows = async (): Promise<TypeShow[]> => {
  const showsFromPage: TypeShow[] = await apiCall<TypeShow[]>(
    `https://api.tvmaze.com/shows?page=0`,
  );
  return showsFromPage;
};
