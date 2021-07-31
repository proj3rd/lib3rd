import { Worksheet } from 'exceljs';
import { IRowInput } from '../../common/spreadsheet';
import { IParameterMapping } from '../expander';
import { Modules } from './modules';
export declare class BooleanValue {
    literal: string;
    value: boolean;
    reference: string | undefined;
    booleanValueTag: boolean;
    constructor(literal: string);
    static fromObject(obj: unknown): BooleanValue;
    expand(moduleS: Modules, parameterMappings: IParameterMapping[]): BooleanValue;
    getDepth(): number;
    toSpreadsheet(worksheet: Worksheet, row: IRowInput, depth: number): void;
    toString(): string;
}
//# sourceMappingURL=booleanValue.d.ts.map