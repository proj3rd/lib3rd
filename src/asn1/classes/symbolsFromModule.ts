import { indent } from '../formatter';
import { AsnSymbol } from './asnSymbol';

export class SymbolsFromModule {
  public moduleName: string;
  public symbols: AsnSymbol[];

  private symbolsFromModuleTag: undefined;

  constructor(moduleName: string, symbols: AsnSymbol[]) {
    this.moduleName = moduleName;
    this.symbols = symbols;
  }

  public toString(): string {
    const arrToString = [
      indent(this.symbols.map((symbol) => symbol.toString()).join(',\n')),
    ];
    arrToString.push(`FROM ${this.moduleName}`);
    return arrToString.join('\n');
  }
}
