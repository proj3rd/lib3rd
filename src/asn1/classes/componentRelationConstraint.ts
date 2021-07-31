import { MSG_ERR_ASN1_MALFORMED_SERIALIZATION } from '../constants';
import { DefinedObjectSet, DefinedObjectSetFromObject } from '../types/definedObjectSet';
import { AtNotation } from './atNotation';

/**
 * X.682 clause 10.7
 * ```
 * { definedObjectSet } { atNotation[0], ..., atNotation[n-1] }
 * ```
 */
export class ComponentRelationConstraint {
  public definedObjectSet: DefinedObjectSet;
  public atNotations: AtNotation[];

  public componentRelationConstraintTag = true;

  constructor(
    definedObjectSet: DefinedObjectSet,
    atNotations: AtNotation[] = [],
  ) {
    this.definedObjectSet = definedObjectSet;
    this.atNotations = atNotations;
  }

  public static fromObject(obj: unknown): ComponentRelationConstraint {
    const {
      definedObjectSet: definedObjectSetObj,
      atNotations: atNotationsObj,
      componentRelationConstraintTag,
    } = obj as ComponentRelationConstraint;
    if (!componentRelationConstraintTag) {
      throw Error(MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
    }
    const definedObjectSet = DefinedObjectSetFromObject(definedObjectSetObj);
    if (!(atNotationsObj instanceof Array)) {
      throw Error(MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
    }
    const atNotations = atNotationsObj.map((item) => AtNotation.fromObject(item));
    return new ComponentRelationConstraint(definedObjectSet, atNotations);
  }

  public toString(): string {
    if (this.atNotations.length === 0) {
      return `{${this.definedObjectSet.toString()}}`;
    }
    const atNotations = this.atNotations
      .map((atNotation) => atNotation.toString())
      .join(', ');
    return `{${this.definedObjectSet.toString()}} {${atNotations}}`;
  }
}
