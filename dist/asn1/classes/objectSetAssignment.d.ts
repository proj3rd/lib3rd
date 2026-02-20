import { Workbook } from 'exceljs';
import { DefinedObjectClass } from './asnType';
import { Modules } from './modules';
import { ObjectSet } from './objectSet';
/**
 * X.681 clause 12.1
 * ```
 * name definedObjectClass ::= objectSet
 * ```
 */
export declare class ObjectSetAssignment {
    name: string;
    definedObjectClass: DefinedObjectClass;
    objectSet: ObjectSet;
    objectSetAssignmentTag: boolean;
    constructor(name: string, definedObjectClass: DefinedObjectClass, objectSet: ObjectSet);
    static fromObject(obj: unknown): ObjectSetAssignment;
    /**
     * Expand `objectSet` property. This will mutate the object itself.
     * @param modules
     */
    expand(modules: Modules): ObjectSetAssignment;
    getDepth(): number;
    toSpreadsheet(workbook?: Workbook): Workbook;
    toString(): string;
    private fullName;
}
//# sourceMappingURL=objectSetAssignment.d.ts.map