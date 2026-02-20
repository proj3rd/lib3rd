import { Workbook } from 'exceljs';
import { AsnType } from '../types/asnType';
import { Modules } from './modules';
import { ObjectSet } from './objectSet';
export declare class TypeAssignment {
    name: string;
    asnType: AsnType | ObjectSet;
    typeAssignmentTag: boolean;
    constructor(name: string, asnType: AsnType);
    static fromObject(obj: unknown): TypeAssignment;
    /**
     * Expand `asnTye` property. This will mutate the object itself.
     * @param modules
     */
    expand(modules: Modules): TypeAssignment;
    getDepth(): number;
    toSpreadsheet(workbook?: Workbook): Workbook;
    toString(): string;
}
//# sourceMappingURL=typeAssignment.d.ts.map