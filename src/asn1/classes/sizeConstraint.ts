import { cloneDeep, isEqual } from 'lodash';
import { MSG_ERR_ASN1_MALFORMED_SERIALIZATION } from '../constants';
import { IParameterMapping } from '../expander';
import { getPermittedIntegerValues } from '../formatter';
import { ExtensionMarker } from './extensionMarker';
import { IntegerValue } from './integerValue';
import { Modules } from './modules';
import { ValueRange } from './valueRange';

export class SizeConstraint {
  public constraint: Array<ExtensionMarker | IntegerValue | ValueRange>;

  public sizeConstraintTag = true;

  constructor(constraint: Array<ExtensionMarker | IntegerValue | ValueRange>) {
    this.constraint = constraint;
  }

  public static fromObject(obj: unknown): SizeConstraint {
    const { constraint: constraintObject, sizeConstraintTag } = obj as SizeConstraint;
    if (!sizeConstraintTag) {
      throw Error(MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
    }
    if (!(constraintObject instanceof Array)) {
      throw Error(MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
    }
    const constraint = constraintObject.map((item) => {
      const { extensionMarkerTag } = item as ExtensionMarker;
      if (extensionMarkerTag) {
        return ExtensionMarker.getInstance();
      }
      const { integerValueTag} = item as IntegerValue;
      if (integerValueTag) {
        return IntegerValue.fromObject(item);
      }
      const { valueRangeTag } = item as ValueRange;
      if (valueRangeTag) {
        return ValueRange.fromObject(item);
      }
      throw Error(MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
    });
    return new SizeConstraint(constraint);
  }

  /**
   * Expand `constraint` property. This will mutate the object itself.
   * @param modules
   * @param parameterMappings
   */
  public expand(
    modules: Modules,
    parameterMappings: IParameterMapping[],
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

  // eslint-disable-next-line class-methods-use-this
  public getDepth(): number {
    return 0;
  }

  public toString(): string {
    return `SIZE ${getPermittedIntegerValues(this.constraint)}`;
  }
}
