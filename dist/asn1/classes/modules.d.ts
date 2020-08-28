import { Workbook } from 'exceljs';
import { Assignment } from '../types';
import { ModuleDefinition } from './moduleDefinition';
export declare class Modules {
    modules: ModuleDefinition[];
    private modulesTag;
    constructor(modules?: ModuleDefinition[]);
    findAssignment(name: string, moduleName?: string): Assignment | undefined;
    toSpreadsheet(): Workbook;
    toString(): string;
}
//# sourceMappingURL=modules.d.ts.map