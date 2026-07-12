import { Workbook } from 'exceljs';
import { Assignment } from '../types/assignment';
import { ModuleDefinition } from './moduleDefinition';
export declare class Modules {
    modules: ModuleDefinition[];
    modulesTag: boolean;
    constructor(modules?: ModuleDefinition[]);
    static fromObject(obj: unknown): Modules;
    findAssignment(name: string, moduleName?: string): Assignment | undefined;
    toSpreadsheet(): Workbook;
    toString(): string;
}
//# sourceMappingURL=modules.d.ts.map