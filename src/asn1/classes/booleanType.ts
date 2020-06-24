import { unimpl } from '../../_devUtils';
import { _Constraint } from './constraint';

export class BooleanType {
  public static getInstance() {
    return BooleanType.instance;
  }

  private static instance: BooleanType = new BooleanType();

  private booleanTypeTag: undefined;

  private constructor() {}

  public setConstraints(constraints: _Constraint[]) {
    if (constraints.length > 0) {
      unimpl();
    }
  }
}
