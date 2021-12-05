export class Truncation {
  public static getInstance() {
    return Truncation.instance;
  }

  private static instance: Truncation = new Truncation();

  public csnTypeTruncation = true;
}
