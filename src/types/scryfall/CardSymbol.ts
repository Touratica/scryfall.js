type Color = "W" | "U" | "B" | "R" | "G";

export type CardSymbol = {
  object: "card_symbol";
  symbol: string;
  loose_variant?: string;
  english: string;
  transposable: boolean;
  represents_mana: boolean;
  mana_value?: number;
  appears_in_mana_costs: boolean;
  funny: boolean;
  colors?: Color[];
  hybrid: boolean;
  phyrexian: boolean;
  gatherer_alternates?: string[];
  svg_uri?: string;
};
