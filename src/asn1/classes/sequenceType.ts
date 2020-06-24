import { unimpl } from '../../_devUtils';
import { _Constraint } from './constraint';
import { ExtensionMarker } from './extensionMarker';
import { NamedType } from './namedType';
import { Optionality } from './optionality';

export class SequenceType {
  public components: RootSequenceComponents[];

  private sequenceTypeTag: undefined;

  constructor(components: RootSequenceComponents[]) {
    this.components = components;
  }

  public setConstraints(constraints: _Constraint[]) {
    if (constraints.length > 0) {
      unimpl();
    }
  }
}

export type RootSequenceComponents =
  | ComponentType
  | ExtensionMarker
  | ExtensionAdditionGroup;

export type ExtensionAddition = ComponentType | ExtensionAdditionGroup;

export class ComponentType extends NamedType {
  public optionality: Optionality | undefined;
  public tag: Tag;

  private componentTypeTag: undefined;

  constructor(
    namedType: NamedType,
    optionality: Optionality | undefined,
    tag: Tag
  ) {
    const { name, asnType } = namedType;
    super(name, asnType);
    this.optionality = optionality;
    this.tag = tag;
  }
}

export type Tag = string;

export class ExtensionAdditionGroup {
  public version: number | undefined;
  public components: ComponentType[];

  private extensionAdditionGroupTag: undefined;

  constructor(version: number | undefined, components: ComponentType[]) {
    this.version = version;
    this.components = components;
  }
}
