import type { CharacterPagination } from "../core/domain/character.entity";
import { clientHttp } from "./http-client";

const API_BASE_URL = import.meta.env.VITE_RICK_AND_MORTY_URL_API;

export const getCharacters = async (queryString?: string, page: number = 1) => {
  const result = await clientHttp.get<CharacterPagination>(
    `${API_BASE_URL}/characters?name=${queryString}&page=${page}&count=${5}`
  );

  //console.table(result.data.results);

  console.log("⚡call API⚡");

  return result?.data;
};
