import { MSG_ERR_CSN1_MALFORMED_SERIALIZATION } from "../constants";
import { Concatenation } from "./concatenation";

export class Choice {
  public choices: Concatenation[];

  public csnTypeChoice = true;

  constructor(choices: Concatenation[]) {
    this.choices = choices;
  }

  public static fromObject(obj: unknown): Choice {
    const { choices: choicesObj, csnTypeChoice } = obj as Choice;
    if (!csnTypeChoice || !(choicesObj instanceof Array)) {
      throw Error(MSG_ERR_CSN1_MALFORMED_SERIALIZATION);
    }
    const choices = choicesObj.map((item) => Concatenation.fromObject(item));
    return new Choice(choices);
  }
}
