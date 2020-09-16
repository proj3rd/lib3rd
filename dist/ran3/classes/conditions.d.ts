import { Worksheet } from 'exceljs';
import { ICondition } from '../types';
export declare class Conditions {
    conditionList: ICondition[];
    constructor(conditionList: ICondition[]);
    toSpreadsheet(worksheet: Worksheet): void;
}
//# sourceMappingURL=conditions.d.ts.map