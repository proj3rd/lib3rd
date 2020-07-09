import { unimpl } from '../../_devUtils';
import { IParameterMapping } from '../expander';
import { _Constraint } from './constraint';
import { Modules } from './modules';

export class NullType {
  public static getInstance() {
    return NullType.instance;
  }

  private static instance: NullType = new NullType();

  private nullTypeTag: undefined;

  private constructor() {}

  public expand(
    modules: Modules,
    parameterMappings: IParameterMapping[]
  ): NullType {
    return this;
  }

  public setConstraints(constraints: _Constraint[]) {
    if (constraints.length > 0) {
      unimpl();
    }
  }

  public toString(): string {
    return 'NULL';
  }
}
