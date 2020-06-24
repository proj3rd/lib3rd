import { unimpl } from '../../_devUtils';
import { _Constraint } from './constraint';
import { ExtensionMarker } from './extensionMarker';
import { NamedType } from './namedType';

export class ChoiceType {
  public components: RootChoiceComponents[];

  private choiceTypeTag: undefined;

  constructor(components: RootChoiceComponents[]) {
    this.components = components;
  }

  public setConstraints(constraints: _Constraint[]) {
    if (constraints.length > 0) {
      unimpl();
    }
  }
}

export type RootChoiceComponents =
  | NamedType
  | ExtensionMarker
  | ExtensionAdditionAlternativeGroup;

export class ExtensionAdditionAlternativeGroup {
  public version: number | undefined;
  public components: NamedType[];

  private extensionAdditionAlternativeGroupTag: undefined;

  constructor(version: number | undefined, components: NamedType[]) {
    this.version = version;
    this.components = components;
  }
}
