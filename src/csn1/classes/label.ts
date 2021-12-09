import { MSG_ERR_CSN1_MALFORMED_SERIALIZATION } from "../constants";
import { Concatenation } from "./concatenation";
import { Exponent, ExponentFromObject } from "./exponent";
import { Reference } from "./reference";
import { SendConstruction } from "./sendConstruction";
import { Subclassing } from "./subclassing";

function DescriptionFromObject(obj: unknown): string | Reference | Concatenation {
  if (typeof obj === 'string') {
    return obj;
  }
  const { csnTypeReference } = obj as Partial<Reference>;
  if (csnTypeReference) {
    return Reference.fromObject(obj);
  }
  const { csnTypeConcatenation } = obj as Partial<Concatenation>;
  if (csnTypeConcatenation) {
    return Concatenation.fromObject(obj);
  }
  throw Error(MSG_ERR_CSN1_MALFORMED_SERIALIZATION);
}

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

  public static fromObject(obj: unknown): Label {
    const {
      name,
      description: descriptionObj,
      exponent: exponentObj,
      subclassing: subclassingObj,
      sendConstruction: sendConstructionObj,
      csnTypeLabel,
    } = obj as Label;
    if (
      typeof name !== 'string' ||
      !csnTypeLabel ||
      (typeof descriptionObj !== 'string' && exponentObj)
    ) {
      throw Error(MSG_ERR_CSN1_MALFORMED_SERIALIZATION);
    }
    const description = DescriptionFromObject(descriptionObj);
    const exponent = exponentObj && ExponentFromObject(exponentObj);
    const subclassing = subclassingObj && Subclassing.fromObject(subclassingObj);
    const sendConstruction = sendConstructionObj && SendConstruction.fromObject(sendConstructionObj);
    return new Label(name, description, { exponent, subclassing, sendConstruction });
  }
}
