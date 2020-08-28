import { Workbook } from 'exceljs';
import { IParameterMapping } from '../expander';
import { Modules } from './modules';
import { ObjectClass } from './objectClass';
export declare class ObjectClassAssignment {
    name: string;
    objectClass: ObjectClass;
    private objectClassAssignmentTag;
    constructor(name: string, objectClass: ObjectClass);
    expand(modules: Modules, parameterMappings: IParameterMapping[]): ObjectClassAssignment;
    getDepth(): number;
    toSpreadsheet(workbook?: Workbook): Workbook;
    toString(): string;
}
//# sourceMappingURL=objectClassAssignment.d.ts.map