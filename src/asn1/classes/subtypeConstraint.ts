import { _ElementSetSpec } from './constraint';
import { ExtensionMarker } from './extensionMarker';

export type ElementSetSpecList = Array<_ElementSetSpec | ExtensionMarker>;

export class SubtypeConstraint {
  public elementSetSpecList: ElementSetSpecList;

  private subtypeConstraintTag: undefined;

  constructor(elementSetSpecList: ElementSetSpecList) {
    this.elementSetSpecList = elementSetSpecList;
  }

  public toString(): string {
    const innerString = this.elementSetSpecList
      .map((elementSetSpec) => elementSetSpec.toString())
      .join(', ');
    return `(${innerString})`; // FIXME: parentheses shall be removed
  }
}
