import { unimpl } from 'unimpl';
import { IParameterMapping } from '../expander';
import { Constraint } from './constraint';
import { ExtensionMarker } from './extensionMarker';
import { Modules } from './modules';

export class EnumeratedType {
  public items: EnumerationItem[];

  private enumeratedTypeTag: undefined;

  constructor(items: EnumerationItem[]) {
    this.items = items;
  }

  public expand(
    modules: Modules,
    parameterMappings: IParameterMapping[]
  ): EnumeratedType {
    return this;
  }

  public setConstraints(constraints: Constraint[]) {
    if (constraints.length > 0) {
      unimpl();
    }
  }

  public toString(): string {
    const arrToString: string[] = [
      'ENUMERATED {',
      this.items.map((item) => item.toString()).join(', '),
      '}',
    ];
    return arrToString.join('');
  }
}

export type EnumerationItem = string | ExtensionMarker;
