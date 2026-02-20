import { Worksheet } from 'exceljs';
import { IRowInput } from '../../common/spreadsheet';
import { IParameterMapping } from '../expander';
import { Modules } from './modules';
import { Optionality } from './optionality';
import { PrimitiveFieldName } from './primitiveFieldName';
export declare class TypeFieldSpec {
    fieldReference: PrimitiveFieldName;
    optionality: Optionality | undefined;
    typeFieldSpecTag: boolean;
    constructor(fieldRerence: PrimitiveFieldName, optionality?: Optionality);
    static fromObject(obj: unknown): TypeFieldSpec;
    expand(modules: Modules, parameterMappings: IParameterMapping[]): TypeFieldSpec;
    getDepth(): number;
    toSpreadsheet(worksheet: Worksheet, row: IRowInput, depth: number): void;
    toString(): string;
}
//# sourceMappingURL=typeFieldSpec.d.ts.map