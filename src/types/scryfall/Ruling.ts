import type { UUID } from "crypto";

export type Ruling = {
  object: "ruling";
  oracle_id: UUID;
  source: "wotc" | "scryfall";
  published_at: string;
  comment: string;
};
