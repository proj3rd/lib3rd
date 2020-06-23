import { AsnSymbol } from './asnSymbol';

export class Imports {
  public symbolsFromModule: SymbolsFromModule[];

  private importsTag: undefined;

  constructor(symbolsFromModule: SymbolsFromModule[]) {
    this.symbolsFromModule = symbolsFromModule;
  }
}

export class SymbolsFromModule {
  public moduleName: string;
  public symbols: AsnSymbol[];

  private symbolsFromModuleTag: undefined;

  constructor(moduleName: string, symbols: AsnSymbol[]) {
    this.moduleName = moduleName;
    this.symbols = symbols;
  }
}
