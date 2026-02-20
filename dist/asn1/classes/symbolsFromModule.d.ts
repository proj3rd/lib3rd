import { AsnSymbol } from './asnSymbol';
export declare class SymbolsFromModule {
    moduleName: string;
    symbols: AsnSymbol[];
    symbolsFromModuleTag: boolean;
    constructor(moduleName: string, symbols: AsnSymbol[]);
    static fromObject(obj: unknown): SymbolsFromModule;
    toString(): string;
}
//# sourceMappingURL=symbolsFromModule.d.ts.map