import { Worksheet } from 'exceljs';
import { IRowInput } from '../../common/spreadsheet';
import { IParameterMapping } from '../expander';
import { Constraint } from './constraint';
import { Modules } from './modules';
export declare class BooleanType {
    reference: string | undefined;
    booleanTypeTag: boolean;
    static fromObject(obj: unknown): BooleanType;
    expand(modules: Modules, parameterMappings: IParameterMapping[]): BooleanType;
    getDepth(): number;
    setConstraints(constraints: Constraint[]): void;
    toSpreadsheet(worksheet: Worksheet, row: IRowInput, depth: number): void;
    toString(): string;
}
//# sourceMappingURL=booleanType.d.ts.map