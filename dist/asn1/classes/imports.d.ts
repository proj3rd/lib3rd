import { AsnSymbol } from './asnSymbol';
export declare class Imports {
    symbolsFromModule: SymbolsFromModule[];
    private importsTag;
    constructor(symbolsFromModule: SymbolsFromModule[]);
    toString(): string;
}
export declare class SymbolsFromModule {
    moduleName: string;
    symbols: AsnSymbol[];
    private symbolsFromModuleTag;
    constructor(moduleName: string, symbols: AsnSymbol[]);
    toString(): string;
}
//# sourceMappingURL=imports.d.ts.map