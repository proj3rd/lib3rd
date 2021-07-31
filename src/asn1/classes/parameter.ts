import { MSG_ERR_ASN1_MALFORMED_SERIALIZATION } from '../constants';
import { ParamGovernor, ParamGovernorFromObject } from '../types/paramGovernor';

export class Parameter {
  public dummyReference: string;
  public paramGovernor: ParamGovernor | undefined;

  public parameterTag = true;

  constructor(
    dummyReference: string,
    paramGovernor: ParamGovernor | undefined,
  ) {
    this.dummyReference = dummyReference;
    this.paramGovernor = paramGovernor;
  }

  public static fromObject(obj: unknown): Parameter {
    const { dummyReference, paramGovernor: paramGovernorObj, parameterTag } = obj as Parameter;
    if (!parameterTag) {
      throw Error(MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
    }
    if (!dummyReference || typeof dummyReference !== 'string') {
      throw Error(MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
    }
    const paramGovernor = paramGovernorObj !== undefined ? ParamGovernorFromObject(paramGovernorObj) : undefined;
    return new Parameter(dummyReference, paramGovernor);
  }

  public toString(): string {
    if (this.paramGovernor === undefined) {
      return this.dummyReference;
    }
    return `${this.paramGovernor.toString()}: ${this.dummyReference}`;
  }
}
