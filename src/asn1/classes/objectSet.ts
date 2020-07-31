import { indent } from '../formatter';
import { _ElementSetSpecs } from '../types';

/**
 * TODO: ObjectSet only supports DefinedObjectSet currently.
 * Note: `SimpleTableConstraint` is equivalent to `ObjectSet`.
 */
export class ObjectSet {
  public objectSetSpec: _ElementSetSpecs;

  private objectSetTag: undefined;

  constructor(objectSetSpec: _ElementSetSpecs) {
    this.objectSetSpec = objectSetSpec;
  }

  public toString(): string {
    const innerString = this.objectSetSpec
      .map((elementSetSpec) => elementSetSpec.toString())
      .join(',\n');
    const arrToString: string[] = ['{', indent(innerString), '}'];
    return arrToString.join('\n');
  }
}
