import axios, { AxiosError } from "axios";
import { SetNotFoundError } from "./errors";
import { getData } from "./lists";
import type { Error, Set } from "./types";

export function getSets(): Promise<Set[] | undefined> {
  return getData<Set>("https://api.scryfall.com/sets");
}

export async function getSet(code: string): Promise<Set | undefined> {
  try {
    const { data } = await axios.get<Set>(
      `https://api.scryfall.com/sets/${code}`,
    );

    return data;
  } catch (error) {
    if (error instanceof AxiosError) {
      if (error.code === "EAI_AGAIN") throw error;

      const scryfallError = error.response?.data as Error;

      if (error.status === 404)
        throw new SetNotFoundError(scryfallError.details);

      throw new Error(scryfallError.details);
    } else console.error(error);
  }
}
