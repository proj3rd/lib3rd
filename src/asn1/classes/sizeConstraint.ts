import { getPermittedIntegerValues } from '../formatter';
import { ExtensionMarker } from './extensionMarker';
import { IntegerValue } from './integerValue';
import { ValueRange } from './valueRange';

export class SizeConstraint {
  public constraint: Array<ExtensionMarker | IntegerValue | ValueRange>;

  private sizeConstraintTag: undefined;

  constructor(constraint: Array<ExtensionMarker | IntegerValue | ValueRange>) {
    this.constraint = constraint;
  }

  public toString(): string {
    return `SIZE ${getPermittedIntegerValues(this.constraint)}`;
  }
}
