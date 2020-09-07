import { Workbook } from 'exceljs';
import { Modules } from './modules';
import { ObjectClass } from './objectClass';
export declare class ObjectClassAssignment {
    name: string;
    objectClass: ObjectClass;
    private objectClassAssignmentTag;
    constructor(name: string, objectClass: ObjectClass);
    /**
     * Expand `objectClass` property. This will mutate the object itself.
     * @param modules
     */
    expand(modules: Modules): ObjectClassAssignment;
    getDepth(): number;
    toSpreadsheet(workbook?: Workbook): Workbook;
    toString(): string;
}
//# sourceMappingURL=objectClassAssignment.d.ts.map