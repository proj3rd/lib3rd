import { Worksheet } from 'exceljs';
import { IRowInput } from '../formatter/spreadsheet';
import { _Intersections } from '../types';
export declare class Unions {
    intersectionsList: _Intersections[];
    private unionsTag;
    constructor(intersections: _Intersections[]);
    getDepth(): number;
    toSpreadsheet(worksheet: Worksheet, row: IRowInput, depth: number): void;
    toString(): string;
}
//# sourceMappingURL=unions.d.ts.map