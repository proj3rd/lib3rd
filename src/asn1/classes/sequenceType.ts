import { unimpl } from '../../_devUtils';
import { _COMMA, indent, toStringWithComma } from '../formatter';
import { AsnType } from './asnType';
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

  public toString(): string {
    if (this.components.length === 0) {
      return 'SEQUENCE {}';
    }
    const arrToString = ['SEQUENCE {'];
    const componentsString = this.components
      .map((component, index) => {
        return toStringWithComma(
          component,
          index !== this.components.length - 1
        );
      })
      .join('\n');
    arrToString.push(indent(componentsString));
    arrToString.push('}');
    return arrToString.join('\n');
  }
}

export type RootSequenceComponents =
  | ComponentType
  | ExtensionMarker
  | ExtensionAdditionGroup;

export type ExtensionAddition = ComponentType | ExtensionAdditionGroup;

export class ComponentType {
  public name: string;
  public asnType: AsnType;
  public optionality: Optionality | undefined;
  public tag: Tag;

  private componentTypeTag: undefined;

  constructor(
    namedType: NamedType,
    optionality: Optionality | undefined,
    tag: Tag
  ) {
    const { name, asnType } = namedType;
    this.name = name;
    this.asnType = asnType;
    this.optionality = optionality;
    this.tag = tag;
  }

  /**
   * This method will return a string with a comma placeholder.
   * And it is discouraged to call `ComponentType.toString()` outside of
   * `SequenceType` and `ExtensionAdditionGroup`.
   */
  public toString(): string {
    const arrToString = [this.name];
    if (this.optionality === undefined) {
      arrToString.push(`${this.asnType.toString()}${_COMMA}`);
    } else if (this.optionality !== undefined) {
      arrToString.push(this.asnType.toString());
      arrToString.push(`${this.optionality.toString()}${_COMMA}`);
    }
    if (this.tag.length > 0) {
      arrToString.push(this.tag);
    }
    return arrToString.join('    ');
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

  public toString(): string {
    if (this.components.length === 0) {
      const arrToStringEmpty = ['[['];
      if (this.version !== undefined) {
        arrToStringEmpty.push(this.version.toString());
      }
      arrToStringEmpty.push(']]');
      return arrToStringEmpty.join(' ');
    }
    const arrToString: string[] = [];
    if (this.version !== undefined) {
      arrToString.push(`[[ ${this.version.toString()}`);
    } else {
      arrToString.push('[[');
    }
    const componentsString = this.components
      .map((component, index) => {
        return toStringWithComma(
          component,
          index !== this.components.length - 1
        );
      })
      .join('\n');
    arrToString.push(indent(componentsString));
    arrToString.push(']]');
    return arrToString.join('\n');
  }
}
