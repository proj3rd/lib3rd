import { MSG_ERR_ASN1_MALFORMED_SERIALIZATION } from '../constants';
import { SymbolsFromModule } from './symbolsFromModule';

export class Imports {
  public symbolsFromModule: SymbolsFromModule[];

  public importsTag = true;

  constructor(symbolsFromModule: SymbolsFromModule[]) {
    this.symbolsFromModule = symbolsFromModule;
  }

  public static fromObject(obj: unknown): Imports {
    const { symbolsFromModule: symbolsFromModuleObject, importsTag } = obj as Imports;
    if (!importsTag) {
      throw Error(MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
    }
    if (!(symbolsFromModuleObject instanceof Array)) {
      throw Error(MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
    }
    const symbolsFromModule = symbolsFromModuleObject.map((item) => SymbolsFromModule.fromObject(item));
    return new Imports(symbolsFromModule);
  }

  public toString(): string {
    const arrToString = ['IMPORTS'];
    this.symbolsFromModule.forEach((symbolsFromModule) => {
      arrToString.push(symbolsFromModule.toString());
    });
    return `${arrToString.join('\n')};`;
  }
}
