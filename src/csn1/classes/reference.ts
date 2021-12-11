import { cloneDeep, isEqual } from "lodash";
import { unimpl } from "unimpl";
import { MSG_ERR_CSN1_MALFORMED_SERIALIZATION } from "../constants";
import { Choice } from "./choice";
import { Concatenation } from "./concatenation";
import { Definitions } from "./definitions";
import { ExponentParenthesis } from "./exponentParenthesis";

export class Reference {
  public name: string;
  public exponent: ExponentParenthesis | undefined;

  public csnTypeReference = true;

  constructor(name: string, exponent?: ExponentParenthesis) {
    this.name = name;
    this.exponent = exponent;
  }

  public expand(definitions: Definitions, index: number = 0) {
    const expandedDefinition = cloneDeep(
      definitions.findDefinition(this.name, index)
    )?.expand(definitions);
    if (!expandedDefinition || isEqual(expandedDefinition, this)) {
      return this;
    }
    // TODO
    unimpl();
  }

  public static fromObject(obj: unknown): Reference {
    const { name, exponent: exponentObj, csnTypeReference } = obj as Reference;
    if (typeof name !== 'string' || !csnTypeReference) {
      throw Error(MSG_ERR_CSN1_MALFORMED_SERIALIZATION);
    }
    const exponent = exponentObj && ExponentParenthesis.fromObject(exponentObj);
    return new Reference(name, exponent);
  }
}
