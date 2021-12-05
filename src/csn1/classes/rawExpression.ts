import { Exponent } from "../visitors/exponentVisitor";
import { IntegerSubclassing } from "./integerSubclassing";
import { SendConstruction } from "./sendConstruction";

export class RawExpression {
  public identifier: string;
  public exponent: Exponent | undefined;
  public integerSubclassing: IntegerSubclassing | undefined;
  public sendConstruction: SendConstruction | undefined;

  public csnTypeRawExpression = true;

  constructor(identifier: string, {
    exponent, integerSubclassing, sendConstruction,
  }: {
    exponent: Exponent | undefined;
    integerSubclassing: IntegerSubclassing | undefined;
    sendConstruction: SendConstruction | undefined;
  }) {
    this.identifier = identifier;
    this.exponent = exponent;
    this.integerSubclassing = integerSubclassing;
    this.sendConstruction = sendConstruction;
  }
}
