import { SymbolsFromModule } from './symbolsFromModule';
export declare class Imports {
    symbolsFromModule: SymbolsFromModule[];
    importsTag: boolean;
    constructor(symbolsFromModule: SymbolsFromModule[]);
    static fromObject(obj: unknown): Imports;
    toString(): string;
}
//# sourceMappingURL=imports.d.ts.map