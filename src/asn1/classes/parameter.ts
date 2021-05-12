import { ParamGovernor } from '../types';

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

  public toString(): string {
    if (this.paramGovernor === undefined) {
      return this.dummyReference;
    }
    return `${this.paramGovernor.toString()}: ${this.dummyReference}`;
  }
}
