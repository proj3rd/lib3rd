import { DefinedObjectSet } from '../types';
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

  private componentRelationConstraintTag: undefined;

  constructor(
    definedObjectSet: DefinedObjectSet,
    atNotations: AtNotation[] = [],
  ) {
    this.definedObjectSet = definedObjectSet;
    this.atNotations = atNotations;
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
