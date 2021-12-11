import { MSG_ERR_CSN1_MALFORMED_SERIALIZATION } from "../constants";
import { Definitions } from "./definitions";
import { Reference } from "./reference";

function SendConstructionFromObject(obj: unknown): string | Reference {
  if (typeof obj === 'string') {
    return obj;
  }
  return Reference.fromObject(obj);
}

export class SendConstruction {
  public sendConstruction: string | Reference;

  public csnTypeSendConstruction = true;

  constructor(sendConstruction: string | Reference) {
    this.sendConstruction = sendConstruction;
  }

  public expand(definitions: Definitions, index: number = 0): SendConstruction {
    return this;
  }

  public static fromObject(obj: unknown): SendConstruction {
    const { sendConstruction: sendConstructionObj, csnTypeSendConstruction } = obj as SendConstruction;
    if (!csnTypeSendConstruction) {
      throw Error(MSG_ERR_CSN1_MALFORMED_SERIALIZATION);
    }
    const sendConstruction = SendConstructionFromObject(sendConstructionObj);
    return new SendConstruction(sendConstruction);
  }
}
