export class SetNotFoundError extends Error {
  public code: string;
  constructor(message: string) {
    super(message);
    this.name = "SetNotFoundError";
    this.code = "1000";
  }
}

export class CardNotFoundError extends Error {
  public code: string;
  constructor(message: string) {
    super(message);
    this.name = "CardNotFoundError";
    this.code = "1100";
  }
}
