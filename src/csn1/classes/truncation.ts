import { MSG_ERR_CSN1_MALFORMED_SERIALIZATION } from "../constants";
import { Definitions } from "./definitions";

export class Truncation {
  public static getInstance() {
    return Truncation.instance;
  }

  private static instance: Truncation = new Truncation();

  public csnTypeTruncation = true;

  public expand(definitions: Definitions, index: number = 0): Truncation {
    return this;
  }

  public static fromObject(obj: unknown): Truncation {
    const { csnTypeTruncation } = obj as Partial<Truncation>;
    if (!csnTypeTruncation) {
      throw Error(MSG_ERR_CSN1_MALFORMED_SERIALIZATION);
    }
    return Truncation.getInstance();
  }
}
