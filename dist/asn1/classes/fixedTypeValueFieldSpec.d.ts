import { Worksheet } from 'exceljs';
import { IRowInput } from '../formatter/spreadsheet';
import { AsnType } from './asnType';
import { Optionality } from './optionality';
import { PrimitiveFieldName } from './primitiveFieldName';
export declare class FixedTypeValueFieldSpec {
    fieldReference: PrimitiveFieldName;
    asnType: AsnType;
    unique: boolean;
    optionality: Optionality | undefined;
    private fixedTypeValueFieldSpecTag;
    constructor(fieldRerence: PrimitiveFieldName, asnType: AsnType, unique: boolean, optionality?: Optionality);
    getDepth(): number;
    toSpreadsheet(worksheet: Worksheet, row: IRowInput, depth: number): void;
    toString(): string;
}
//# sourceMappingURL=fixedTypeValueFieldSpec.d.ts.map