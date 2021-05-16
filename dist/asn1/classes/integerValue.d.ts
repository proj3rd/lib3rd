import { Worksheet } from 'exceljs';
import { IRowInput } from '../../common/spreadsheet';
import { IParameterMapping } from '../expander';
import { Modules } from './modules';
import { ValueReference } from './valueReference';
export declare class IntegerValue {
    literal: string;
    value: number | ValueReference;
    reference: string | undefined;
    integerValueTag: boolean;
    constructor(literal: string);
    static fromObject(obj: unknown): IntegerValue;
    expand(modules: Modules, parameterMappings: IParameterMapping[]): IntegerValue;
    getDepth(): number;
    toSpreadsheet(worksheet: Worksheet, row: IRowInput, depth: number): void;
    toString(): string;
}
//# sourceMappingURL=integerValue.d.ts.map