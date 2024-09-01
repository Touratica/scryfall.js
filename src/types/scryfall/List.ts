export type List<T> = {
  object: "list";
  data: T[];
  has_more: boolean;
  next_page?: string;
  total_cards?: number;
  warnings?: string[];
};
