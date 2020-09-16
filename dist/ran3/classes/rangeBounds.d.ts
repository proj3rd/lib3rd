import { Worksheet } from 'exceljs';
import { IRangeBound } from '../types';
export declare class RangeBounds {
    rangeBoundList: IRangeBound[];
    constructor(rangeBoundList: IRangeBound[]);
    toSpreadsheet(worksheet: Worksheet): void;
}
//# sourceMappingURL=rangeBounds.d.ts.map