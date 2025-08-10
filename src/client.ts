import { AxiosError, CreateAxiosDefaults } from "axios";

import type { Card, Error, List, Set } from "./types";
import { AxiosClient } from "./utils/axios";
import { SetNotFoundError } from "./utils/errors";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface ScryfallClientConfig extends CreateAxiosDefaults {}

export class Scryfall {
  private readonly axiosClient: AxiosClient;

  public constructor(config: ScryfallClientConfig = {}) {
    this.axiosClient = new AxiosClient(config);
  }

  public readonly cards = {
    getRandomCard: async () => {
      try {
        const data = await this.axiosClient.get<Card>("/cards/random");

        return data;
      } catch (error) {
        if (error instanceof AxiosError) {
          if (error.code === "EAI_AGAIN") throw error;

          const scryfallError = error.response?.data as Error;

          throw new Error(scryfallError.details);
        } else console.error(error);
      }
    },
  };

  private readonly lists = {
    getData: async <T>(uri: string): Promise<T[] | undefined> => {
      try {
        let data = await this.axiosClient.get<List<T>>(uri);

        const result = data.data;

        while (data.has_more) {
          data = await this.axiosClient.get<List<T>>(data.next_page!);

          result.push(...data.data);
        }

        return result;
      } catch (error) {
        if (error instanceof AxiosError) {
          if (error.code === "EAI_AGAIN") throw error;

          const scryfallError = error.response?.data as Error;

          throw new Error(scryfallError.details);
        }
        throw error;
      }
    },
  };

  public readonly sets = {
    getSets: async () => {
      return await this.lists.getData<Set>("/sets");
    },
    getSet: async (code: string) => {
      try {
        const data = await this.axiosClient.get<Set>(`/sets/${code}`);

        return data;
      } catch (error) {
        if (error instanceof AxiosError) {
          if (error.code === "EAI_AGAIN") throw error;

          const scryfallError = error.response?.data as Error;

          if (error.status === 404)
            throw new SetNotFoundError(scryfallError.details);

          throw new Error(scryfallError.details);
        }
        throw error;
      }
    },
  };
}
