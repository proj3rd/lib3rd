import { MSG_ERR_ASN1_MALFORMED_SERIALIZATION } from '../constants';
import { indent } from '../formatter';
import { AsnSymbol, Reference } from './asnSymbol';

export class SymbolsFromModule {
  public moduleName: string;
  public symbols: AsnSymbol[];

  public symbolsFromModuleTag = true;

  constructor(moduleName: string, symbols: AsnSymbol[]) {
    this.moduleName = moduleName;
    this.symbols = symbols;
  }

  public static fromObject(obj: unknown) {
    const { moduleName: moduleNameObject, symbols: symbolsObject, symbolsFromModuleTag } = obj as SymbolsFromModule;
    if (!symbolsFromModuleTag) {
      throw Error(MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
    }
    if (typeof moduleNameObject !== 'string') {
      throw Error(MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
    }
    if (!(symbolsObject instanceof Array)) {
      throw Error(MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
    }
    const symbols = symbolsObject.map((item) => Reference.fromObject(item));
    return new SymbolsFromModule(moduleNameObject, symbols);
  }

  public toString(): string {
    const arrToString = [
      indent(this.symbols.map((symbol) => symbol.toString()).join(',\n')),
    ];
    arrToString.push(`FROM ${this.moduleName}`);
    return arrToString.join('\n');
  }
}
