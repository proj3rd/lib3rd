import { Worksheet } from 'exceljs';
import { IRowInput } from '../../common/spreadsheet';
import { IParameterMapping } from '../expander';
import { Modules } from './modules';
export declare class ValueReference {
    valueReference: string;
    reference: string | undefined;
    private valueReferenceTag;
    constructor(valueReference: string);
    expand(modules: Modules, parameterMappings: IParameterMapping[]): ValueReference;
    getDepth(): number;
    toSpreadsheet(worksheet: Worksheet, row: IRowInput, depth: number): void;
    toString(): string;
}
//# sourceMappingURL=valueReference.d.ts.map