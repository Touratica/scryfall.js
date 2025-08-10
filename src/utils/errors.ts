export class SetNotFoundError extends Error {
  public code: string;
  constructor(message: string) {
    super(message);
    this.name = "SetNotFoundError";
    this.code = "1001";
  }
}
