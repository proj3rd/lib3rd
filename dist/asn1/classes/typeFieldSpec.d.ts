import { Worksheet } from 'exceljs';
import { IParameterMapping } from '../expander';
import { IRowInput } from '../formatter/spreadsheet';
import { Modules } from './modules';
import { Optionality } from './optionality';
import { PrimitiveFieldName } from './primitiveFieldName';
export declare class TypeFieldSpec {
    fieldReference: PrimitiveFieldName;
    optionality: Optionality | undefined;
    private typeFieldSpecTag;
    constructor(fieldRerence: PrimitiveFieldName, optionality?: Optionality);
    expand(modules: Modules, parameterMappings: IParameterMapping[]): TypeFieldSpec;
    getDepth(): number;
    toSpreadsheet(worksheet: Worksheet, row: IRowInput, depth: number): void;
    toString(): string;
}
//# sourceMappingURL=typeFieldSpec.d.ts.map