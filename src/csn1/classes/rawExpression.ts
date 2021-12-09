import { MSG_ERR_CSN1_MALFORMED_SERIALIZATION } from "../constants";
import { Exponent, ExponentFromObject } from "./exponent";
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

  public static fromObject(obj: unknown): RawExpression {
    const {
      identifier,
      exponent: exponentObj,
      integerSubclassing: integerSubclassingObj,
      sendConstruction: sendConstructionObj,
      csnTypeRawExpression,
    } = obj as RawExpression;
    if (typeof identifier !== 'string' || !csnTypeRawExpression) {
      throw Error(MSG_ERR_CSN1_MALFORMED_SERIALIZATION);
    }
    const exponent = exponentObj && ExponentFromObject(exponentObj);
    const integerSubclassing = integerSubclassingObj && IntegerSubclassing.fromObject(integerSubclassingObj);
    const sendConstruction = sendConstructionObj && SendConstruction.fromObject(sendConstructionObj);
    return new RawExpression(identifier, { exponent, integerSubclassing, sendConstruction });
  }
}
