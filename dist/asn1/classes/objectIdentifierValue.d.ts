import { Worksheet } from 'exceljs';
import { IRowInput } from '../formatter/spreadsheet';
import { ObjectIdComponents } from '../types';
/**
 * X.680 clause 32.3
 * ```
 * { objectIdComponents[0] ... objectIdComponents[n-1] }
 * ```
 * # Limitations
 * A form of `{ definedValue objectIdComponentsList }` is not supported
 */
export declare class ObjectIdentifierValue {
    objectIdComponentsList: ObjectIdComponents[];
    private objectIdentifierValueTag;
    private compoundComponentList;
    constructor(objectIdComponentsList: ObjectIdComponents[]);
    getDepth(): number;
    toSpreadsheet(worksheet: Worksheet, row: IRowInput, depth: number): void;
    /** TODO
     * Need to improve formatting for RAN3 procedure definitions.
     * Branching by the length is a workaround and not ideal.
     */
    toString(): string;
    private compoundComponent;
}
//# sourceMappingURL=objectIdentifierValue.d.ts.map