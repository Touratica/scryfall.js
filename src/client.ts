import { AxiosError, CreateAxiosDefaults } from "axios";

import type { Card, Error, Language, List, Set } from "./types";
import { AxiosClient } from "./utils/axios";
import { CardNotFoundError, SetNotFoundError } from "./utils/errors";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface ScryfallClientConfig extends CreateAxiosDefaults {}

export class Scryfall {
  private readonly axiosClient: AxiosClient;

  constructor(config: ScryfallClientConfig = {}) {
    this.axiosClient = new AxiosClient(config);
  }

  readonly cards = {
    getRandomCard: async () => {
      try {
        return await this.axiosClient.get<Card>("/cards/random");
      } catch (error) {
        if (error instanceof AxiosError) {
          if (error.code === "EAI_AGAIN") throw error;

          const scryfallError = error.response?.data as Error;

          throw new Error(scryfallError.details);
        } else console.error(error);
      }
    },
    getCardBySetByNumber: async (
      set: string,
      number: number,
      lang?: Language,
    ) => {
      try {
        const langPath = lang ? `/${lang}` : "";
        return await this.axiosClient.get<Card>(
          `/cards/${set}/${number}${langPath}`,
        );
      } catch (error) {
        if (error instanceof AxiosError) {
          if (error.code === "EAI_AGAIN") throw error;

          const scryfallError = error.response?.data as Error;

          if (scryfallError.status === 404)
            throw new CardNotFoundError(scryfallError.details);

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

  readonly sets = {
    getSets: async () => {
      return await this.lists.getData<Set>("/sets");
    },
    getSet: async (code: string) => {
      try {
        return await this.axiosClient.get<Set>(`/sets/${code}`);
      } catch (error) {
        if (error instanceof AxiosError) {
          if (error.code === "EAI_AGAIN") throw error;

          const scryfallError = error.response?.data as Error;

          if (scryfallError.status === 404)
            throw new SetNotFoundError(scryfallError.details);

          throw new Error(scryfallError.details);
        }
        throw error;
      }
    },
  };
}
