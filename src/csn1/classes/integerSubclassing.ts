import { MSG_ERR_CSN1_MALFORMED_SERIALIZATION } from "../constants";
import { Definitions } from "./definitions";

export class IntegerSubclassing {
  public subclass: string;

  public csnTypeIntegerSubclassing = true;

  constructor(subclass: string) {
    this.subclass = subclass;
  }

  public expand(definitions: Definitions, index: number = 0): IntegerSubclassing {
    return this;
  }

  public static fromObject(obj: unknown): IntegerSubclassing {
    const { subclass, csnTypeIntegerSubclassing } = obj as IntegerSubclassing;
    if (typeof subclass !== 'string' || !csnTypeIntegerSubclassing) {
      throw Error(MSG_ERR_CSN1_MALFORMED_SERIALIZATION);
    }
    return new IntegerSubclassing(subclass);
  }
}
