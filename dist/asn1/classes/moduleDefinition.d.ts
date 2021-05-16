import { Workbook } from 'exceljs';
import { Assignment } from '../types/assignment';
import { Exports } from '../types/exports';
import { ExtensionDefault } from '../types/extensionDefault';
import { TagDefault } from '../types/tagDefault';
import { DefinitiveIdentification } from './definitiveIdentification';
import { Imports } from './imports';
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
    moduleDefinitionTag: boolean;
    constructor(name: string, definitiveIdentification: DefinitiveIdentification, tagDefault: TagDefault, extensionDefault: ExtensionDefault, moduleBody: IModuleBody);
    static fromObject(obj: unknown): ModuleDefinition;
    findAssignment(name: string): Assignment | undefined;
    toSpreadsheet(workbook?: Workbook): Workbook;
    toString(): string;
}
//# sourceMappingURL=moduleDefinition.d.ts.map