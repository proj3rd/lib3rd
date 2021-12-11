import { cloneDeep, isEqual } from "lodash";
import { MSG_ERR_CSN1_MALFORMED_SERIALIZATION } from "../constants";
import { Concatenation } from "./concatenation";
import { Definitions } from "./definitions";

export class Choice {
  public choices: Concatenation[];

  public csnTypeChoice = true;

  constructor(choices: Concatenation[]) {
    this.choices = choices;
  }

  public expand(definitions: Definitions, index: number = 0): Choice {
    this.choices = this.choices.map((choice) => {
      const expandedChoice = cloneDeep(choice).expand(definitions, index);
      if (isEqual(expandedChoice, choice)) {
        return choice;
      }
      return expandedChoice;
    });
    return this;
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
