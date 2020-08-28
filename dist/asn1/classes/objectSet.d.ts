import { Worksheet } from 'exceljs';
import { IRowInput } from '../formatter/spreadsheet';
import { _ElementSetSpecs } from '../types';
/**
 * TODO: ObjectSet only supports DefinedObjectSet currently.
 * Note: `SimpleTableConstraint` is equivalent to `ObjectSet`.
 */
export declare class ObjectSet {
    objectSetSpec: _ElementSetSpecs;
    private objectSetTag;
    constructor(objectSetSpec: _ElementSetSpecs);
    getDepth(): number;
    toSpreadsheet(worksheet: Worksheet, row: IRowInput, depth: number): void;
    toString(): string;
}
//# sourceMappingURL=objectSet.d.ts.map