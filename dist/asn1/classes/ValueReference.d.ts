import { Worksheet } from 'exceljs';
import { IParameterMapping } from '../expander';
import { IRowInput } from '../../common/spreadsheet';
import { Modules } from './modules';
export declare class ValueReference {
    valueReference: string;
    private valueReferenceTag;
    constructor(valueReference: string);
    expand(modules: Modules, parameterMappings: IParameterMapping[]): ValueReference;
    getDepth(): number;
    toSpreadsheet(worksheet: Worksheet, row: IRowInput, depth: number): void;
    toString(): string;
}
//# sourceMappingURL=ValueReference.d.ts.map