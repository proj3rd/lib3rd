import { unimpl } from '../../_devUtils';
import { _Constraint } from './constraint';

export class NullType {
  public static getInstance() {
    return NullType.instance;
  }

  private static instance: NullType = new NullType();

  private nullTypeTag: undefined;

  private constructor() {}

  public setConstraints(constraints: _Constraint[]) {
    if (constraints.length > 0) {
      unimpl();
    }
  }

  public toString(): string {
    return 'NULL';
  }
}
