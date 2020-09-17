import { Worksheet } from 'exceljs';
import { ICondition } from '../types';
export declare class Conditions {
    conditionList: ICondition[];
    constructor(conditionList: ICondition[]);
    add(condition: ICondition): void;
    toSpreadsheet(worksheet: Worksheet): void;
}
//# sourceMappingURL=conditions.d.ts.map