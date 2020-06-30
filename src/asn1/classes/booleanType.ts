import { unimpl } from '../../_devUtils';
import { IExpandOption } from '../expander';
import { _Constraint } from './constraint';
import { Modules } from './modules';

export class BooleanType {
  public static getInstance() {
    return BooleanType.instance;
  }

  private static instance: BooleanType = new BooleanType();

  private booleanTypeTag: undefined;

  private constructor() {}

  public expand(modules: Modules, expandOption: IExpandOption): BooleanType {
    return this;
  }

  public setConstraints(constraints: _Constraint[]) {
    if (constraints.length > 0) {
      unimpl();
    }
  }

  public toString(): string {
    return 'BOOLEAN';
  }
}
