import { unimpl } from '../../_devUtils';
import { indent } from '../formatter';
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

  public toString(): string {
    if (this.components.length === 0) {
      return 'CHOICE {}';
    }
    const arrToString = ['CHOICE {'];
    const componentsString = this.components
      .map((component) => component.toString())
      .join(',\n');
    arrToString.push(indent(componentsString));
    arrToString.push('}');
    return arrToString.join('\n');
  }
}

export type RootChoiceComponents =
  | NamedType
  | ExtensionMarker
  | ExtensionAdditionAlternativeGroup;

export type ExtensionAdditionAlternative =
  | NamedType
  | ExtensionAdditionAlternativeGroup;

export class ExtensionAdditionAlternativeGroup {
  public version: number | undefined;
  public components: NamedType[];

  private extensionAdditionAlternativeGroupTag: undefined;

  constructor(version: number | undefined, components: NamedType[]) {
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
      .map((component) => component.toString())
      .join(',\n');
    arrToString.push(indent(componentsString));
    arrToString.push(']]');
    return arrToString.join('\n');
  }
}
