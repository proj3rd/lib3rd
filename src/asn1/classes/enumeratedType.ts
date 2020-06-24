import { unimpl } from '../../_devUtils';
import { _Constraint } from './constraint';
import { ExtensionMarker } from './extensionMarker';

export class EnumeratedType {
  public items: EnumerationItem[];

  private enumeratedTypeTag: undefined;

  constructor(items: EnumerationItem[]) {
    this.items = items;
  }

  public setConstraints(constraints: _Constraint[]) {
    if (constraints.length > 0) {
      unimpl();
    }
  }
}

export type EnumerationItem = string | ExtensionMarker;
