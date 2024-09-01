import type { UUID } from "crypto";
import type { Language } from "./Card";

type MigrationStrategy = "merge" | "delete";

type Metadata = {
  id: UUID;
  lang: Language;
  name: string;
  set_code: string;
  oracle_id: UUID;
  collector_number: string;
};

export type Migration = {
  object: "migration";
  uri: string;
  id: UUID;
  performed_at: string;
  migration_strategy: MigrationStrategy;
  old_scryfall_id: UUID;
  new_scryfall_id?: UUID;
  note?: string;
  metadata?: Metadata;
};
