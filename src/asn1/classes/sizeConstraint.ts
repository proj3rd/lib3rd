import { cloneDeep, isEqual } from 'lodash';
import { IParameterMapping } from '../expander';
import { getPermittedIntegerValues } from '../formatter';
import { ExtensionMarker } from './extensionMarker';
import { IntegerValue } from './integerValue';
import { Modules } from './modules';
import { ValueRange } from './valueRange';

export class SizeConstraint {
  public constraint: Array<ExtensionMarker | IntegerValue | ValueRange>;

  private sizeConstraintTag: undefined;

  constructor(constraint: Array<ExtensionMarker | IntegerValue | ValueRange>) {
    this.constraint = constraint;
  }

  /**
   * Expand `constraint` property. This will mutate the object itself.
   * @param modules
   * @param parameterMappings
   */
  public expand(
    modules: Modules,
    parameterMappings: IParameterMapping[]
  ): SizeConstraint {
    const expandedConstarint = this.constraint.map((con) => {
      if (con instanceof ExtensionMarker) {
        return con;
      }
      const expandedCon = cloneDeep(con).expand(modules, parameterMappings);
      if (isEqual(expandedCon, con)) {
        return con;
      }
      return expandedCon;
    });
    if (!isEqual(expandedConstarint, this.constraint)) {
      this.constraint = expandedConstarint;
    }
    return this;
  }

  public getDepth(): number {
    return 0;
  }

  public toString(): string {
    return `SIZE ${getPermittedIntegerValues(this.constraint)}`;
  }
}
