import { DefinedObjectSet } from '../types';
import { _ElementSetSpecs } from './constraint';

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
    return `{${this.objectSetSpec.toString()}}`;
  }
}
