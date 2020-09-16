import { Worksheet } from 'exceljs';
import { IParameterMapping } from '../expander';
import { IRowInput } from '../../common/spreadsheet';
import { Constraint } from './constraint';
import { Modules } from './modules';
export declare class BooleanType {
    static getInstance(): BooleanType;
    private static instance;
    private booleanTypeTag;
    private constructor();
    expand(modules: Modules, parameterMappings: IParameterMapping[]): BooleanType;
    getDepth(): number;
    setConstraints(constraints: Constraint[]): void;
    toSpreadsheet(worksheet: Worksheet, row: IRowInput, depth: number): void;
    toString(): string;
}
//# sourceMappingURL=booleanType.d.ts.map