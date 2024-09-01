import axios, { AxiosError } from "axios";
import type { Error, List } from "./types";

export async function getData<T>(uri: string): Promise<T[] | undefined> {
  try {
    let { data } = await axios.get<List<T>>(uri);

    const result = data.data;

    while (data.has_more) {
      data = (await axios.get<List<T>>(data.next_page!)).data;

      result.push(...data.data);
    }

    return result;
  } catch (error) {
    if (error instanceof AxiosError) {
      if (error.code === "EAI_AGAIN") throw error;

      const scryfallError = error.response?.data as Error;

      throw new Error(scryfallError.details);
    } else console.error(error);
  }
}
