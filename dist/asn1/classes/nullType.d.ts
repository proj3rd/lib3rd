import { Worksheet } from 'exceljs';
import { IRowInput } from '../../common/spreadsheet';
import { IParameterMapping } from '../expander';
import { Constraint } from './constraint';
import { Modules } from './modules';
export declare class NullType {
    reference: string | undefined;
    nullTypeTag: boolean;
    static fromObject(obj: unknown): NullType;
    expand(modules: Modules, parameterMappings: IParameterMapping[]): NullType;
    getDepth(): number;
    setConstraints(constraints: Constraint[]): void;
    toSpreadsheet(worksheet: Worksheet, row: IRowInput, depth: number): void;
    toString(): string;
}
//# sourceMappingURL=nullType.d.ts.map