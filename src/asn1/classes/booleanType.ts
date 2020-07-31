import { unimpl } from 'unimpl';
import { IParameterMapping } from '../expander';
import { Constraint } from './constraint';
import { Modules } from './modules';

export class BooleanType {
  public static getInstance() {
    return BooleanType.instance;
  }

  private static instance: BooleanType = new BooleanType();

  private booleanTypeTag: undefined;

  private constructor() {}

  public expand(
    modules: Modules,
    parameterMappings: IParameterMapping[]
  ): BooleanType {
    return this;
  }

  public setConstraints(constraints: Constraint[]) {
    if (constraints.length > 0) {
      unimpl();
    }
  }

  public toString(): string {
    return 'BOOLEAN';
  }
}
