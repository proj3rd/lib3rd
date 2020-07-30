import { indent } from '../formatter';
import { ObjectIdComponents } from '../types';

/**
 * X.680 clause 32.3
 * ```
 * { objectIdComponents[0] ... objectIdComponents[n-1] }
 * ```
 * # Limitations
 * A form of `{ definedValue objectIdComponentsList }` is not supported
 */
export class ObjectIdentifierValue {
  public objectIdComponentsList: ObjectIdComponents[];

  private objectIdentifierValueTag: undefined;

  constructor(objectIdComponentsList: ObjectIdComponents[]) {
    this.objectIdComponentsList = objectIdComponentsList;
  }

  /** TODO
   * Need to improve formatting for RAN3 procedure definitions.
   * Branching by the length is a workaround and not ideal.
   */
  public toString(): string {
    if (this.objectIdComponentsList.length === 1) {
      return `{${this.objectIdComponentsList[0].toString()}}`;
    }
    const arrToString: string[] = ['{'];
    this.objectIdComponentsList.forEach((component, index) => {
      if (index % 2 !== 0) {
        return;
      }
      const componentNext = this.objectIdComponentsList[index + 1];
      if (componentNext === undefined) {
        arrToString.push(indent(component.toString()));
        return;
      }
      arrToString.push(
        indent(`${component.toString()}   ${componentNext.toString()}`)
      );
    });
    arrToString.push('}');
    return arrToString.join('\n');
  }
}
