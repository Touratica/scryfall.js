import axios, { AxiosError } from "axios";
import type { Card, Error } from "./types";

export async function getRandomCard() {
  try {
    const { data } = await axios.get<Card>(
      "https://api.scryfall.com/cards/random",
    );

    return data;
  } catch (error) {
    if (error instanceof AxiosError) {
      if (error.code === "EAI_AGAIN") throw error;

      const scryfallError = error.response?.data as Error;

      throw new Error(scryfallError.details);
    } else console.error(error);
  }
}
