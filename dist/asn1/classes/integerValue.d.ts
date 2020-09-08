import { Worksheet } from 'exceljs';
import { IParameterMapping } from '../expander';
import { IRowInput } from '../formatter/spreadsheet';
import { Modules } from './modules';
import { ValueReference } from './ValueReference';
export declare class IntegerValue {
    literal: string;
    value: number | ValueReference;
    private integerValueTag;
    constructor(literal: string);
    expand(modules: Modules, parameterMappings: IParameterMapping[]): IntegerValue;
    getDepth(): number;
    toSpreadsheet(worksheet: Worksheet, row: IRowInput, depth: number): void;
    toString(): string;
}
//# sourceMappingURL=integerValue.d.ts.map