import { SymbolsFromModule } from './symbolsFromModule';

export class Imports {
  public symbolsFromModule: SymbolsFromModule[];

  constructor(symbolsFromModule: SymbolsFromModule[]) {
    this.symbolsFromModule = symbolsFromModule;
  }

  public toString(): string {
    const arrToString = ['IMPORTS'];
    this.symbolsFromModule.forEach((symbolsFromModule) => {
      arrToString.push(symbolsFromModule.toString());
    });
    return `${arrToString.join('\n')};`;
  }
}
