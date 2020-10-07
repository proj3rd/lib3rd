import { Workbook } from 'exceljs';
import { Assignment } from '../types';
import { AsnSymbol } from './asnSymbol';
import { DefinitiveIdentification } from './definitiveIdentification';
import { Imports } from './imports';
export declare type TagDefault = 'EXPLICIT TAGS' | 'IMPLICIT TAGS' | 'AUTOMATIC TAGS' | '';
export declare type ExtensionDefault = 'EXTENSIBILITY IMPLIED' | '';
export declare type Exports = 'ALL' | AsnSymbol[];
/**
 * This is intermediate interface used by a `ModuleBodyVisitor`
 */
export interface IModuleBody {
    exports: Exports | null;
    imports: Imports | null;
    assignments: Assignment[];
}
export declare class ModuleDefinition implements IModuleBody {
    name: string;
    definitiveIdentification: DefinitiveIdentification;
    tagDefault: TagDefault;
    extensionDefault: ExtensionDefault;
    exports: Exports | null;
    imports: Imports | null;
    assignments: Assignment[];
    private moduleDefinitionTag;
    constructor(name: string, definitiveIdentification: DefinitiveIdentification, tagDefault: TagDefault, extensionDefault: ExtensionDefault, moduleBody: IModuleBody);
    findAssignment(name: string): Assignment | undefined;
    toSpreadsheet(workbook?: Workbook): Workbook;
    toString(): string;
}
//# sourceMappingURL=moduleDefinition.d.ts.map