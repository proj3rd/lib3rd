import { Worksheet } from 'exceljs';
import { IRowInput } from '../formatter/spreadsheet';
import { Optionality } from './optionality';
import { PrimitiveFieldName } from './primitiveFieldName';
export declare class TypeFieldSpec {
    fieldReference: PrimitiveFieldName;
    optionality: Optionality | undefined;
    private typeFieldSpecTag;
    constructor(fieldRerence: PrimitiveFieldName, optionality?: Optionality);
    getDepth(): number;
    toSpreadsheet(worksheet: Worksheet, row: IRowInput, depth: number): void;
    toString(): string;
}
//# sourceMappingURL=typeFieldSpec.d.ts.map