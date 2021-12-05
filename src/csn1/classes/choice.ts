import { Concatenation } from "./concatenation";

export class Choice {
  public choices: Concatenation[];

  public csnTypeChoice = true;

  constructor(choices: Concatenation[]) {
    this.choices = choices;
  }
}
