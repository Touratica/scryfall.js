import type { UUID } from "crypto";

export type BulkData = {
  object: "bulk_data";
  id: UUID;
  uri: string;
  type: string;
  name: string;
  description: string;
  download_uri: string;
  updated_at: string;
  size: number;
  content_type: string;
  content_encoding: string;
};
