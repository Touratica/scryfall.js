import type { UUID } from "crypto";

export type Language =
  | "en"
  | "es"
  | "fr"
  | "de"
  | "it"
  | "pt"
  | "ja"
  | "ko"
  | "ru"
  | "zhs"
  | "zht"
  | "he"
  | "la"
  | "grc"
  | "ar"
  | "sa"
  | "ph";

type Layout =
  | "normal"
  | "split"
  | "flip"
  | "transform"
  | "modal_dfc"
  | "meld"
  | "leveler"
  | "class"
  | "case"
  | "saga"
  | "adventure"
  | "mutate"
  | "prototype"
  | "battle"
  | "planar"
  | "scheme"
  | "vanguard"
  | "token"
  | "double_faced_token"
  | "emblem"
  | "augment"
  | "host"
  | "art_series"
  | "reversible_card";

export type Card = {
  // Core Fields
  arena_id?: number;
  id: UUID;
  lang: Language;
  mtgo_id?: number;
  mtgo_foil_id?: number;
  multiverse_ids?: number[];
  tcgplayer_id?: number;
  tcgplayer_etched_id?: number;
  cardmarket_id?: number;
  object: "card";
  layout: Layout;
  oracle_id?: UUID;
  prints_search_uri: string;
  rulings_uri: string;
  scryfall_uri: string;
  uri: string;
};
