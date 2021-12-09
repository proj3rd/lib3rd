import { MSG_ERR_CSN1_MALFORMED_SERIALIZATION } from "../constants";

export class Subclassing {
  public subclass: string;

  public csnTypeSubclassing = true;

  constructor(subclass: string) {
    this.subclass = subclass;
  }

  public static fromObject(obj: unknown): Subclassing {
    const { subclass, csnTypeSubclassing } = obj as Subclassing;
    if (typeof subclass !== 'string' || !csnTypeSubclassing) {
      throw Error(MSG_ERR_CSN1_MALFORMED_SERIALIZATION);
    }
    return new Subclassing(subclass);
  }
}
