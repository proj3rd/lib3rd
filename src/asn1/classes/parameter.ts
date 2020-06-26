import { unimpl } from '../../_devUtils';

export class Parameter {
  public dummyReference: string;

  private parameterTag: undefined;

  constructor(dummyReference: string) {
    this.dummyReference = dummyReference;
  }

  public toString(): string {
    return this.dummyReference;
  }
}
