import { IParameterMapping } from '../expander';
import { Modules } from './modules';

export class ValueReference {
  public valueReference: string;

  private valueReferenceTag: undefined;

  constructor(valueReference: string) {
    this.valueReference = valueReference;
  }

  public expand(
    modules: Modules,
    parameterMappings: IParameterMapping[]
  ): ValueReference {
    return this;
  }

  public getDepth(): number {
    return 0;
  }

  public toString(): string {
    return this.valueReference;
  }
}
