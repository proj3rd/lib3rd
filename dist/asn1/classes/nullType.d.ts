import { Worksheet } from 'exceljs';
import { IParameterMapping } from '../expander';
import { IRowInput } from '../../common/spreadsheet';
import { Constraint } from './constraint';
import { Modules } from './modules';
export declare class NullType {
    static getInstance(): NullType;
    private static instance;
    private nullTypeTag;
    private constructor();
    expand(modules: Modules, parameterMappings: IParameterMapping[]): NullType;
    getDepth(): number;
    setConstraints(constraints: Constraint[]): void;
    toSpreadsheet(worksheet: Worksheet, row: IRowInput, depth: number): void;
    toString(): string;
}
//# sourceMappingURL=nullType.d.ts.map