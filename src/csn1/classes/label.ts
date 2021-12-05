import { Exponent } from "../visitors/exponentVisitor";
import { Concatenation } from "./concatenation";
import { Reference } from "./reference";
import { SendConstruction } from "./sendConstruction";
import { Subclassing } from "./subclassing";

export class Label {
  public name: string;
  public description: string | Reference | Concatenation;
  // Valid only for reference, i.e. when `typeof description === 'string'`
  public exponent: Exponent | undefined;
  public subclassing: Subclassing | undefined;
  public sendConstruction: SendConstruction | undefined;
  
  public csnTypeLabel = true;
  
  constructor(
    name: string,
    description: string | Reference | Concatenation,
    { exponent, subclassing, sendConstruction }: {
      exponent?: Exponent,
      subclassing?: Subclassing,
      sendConstruction?: SendConstruction,
    } = {},
  ) {
    this.name = name;
    this.description = description;
    this.exponent = exponent;
    this.subclassing = subclassing;
    this.sendConstruction = sendConstruction;
  }
}
