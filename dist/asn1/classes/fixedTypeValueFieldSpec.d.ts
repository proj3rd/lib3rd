import { Worksheet } from 'exceljs';
import { IRowInput } from '../../common/spreadsheet';
import { IParameterMapping } from '../expander';
import { AsnType } from './asnType';
import { Modules } from './modules';
import { Optionality } from './optionality';
import { PrimitiveFieldName } from './primitiveFieldName';
export declare class FixedTypeValueFieldSpec {
    fieldReference: PrimitiveFieldName;
    asnType: AsnType;
    unique: boolean;
    optionality: Optionality | undefined;
    private fixedTypeValueFieldSpecTag;
    constructor(fieldRerence: PrimitiveFieldName, asnType: AsnType, unique: boolean, optionality?: Optionality);
    /**
     * Expand `asnType` property. This will mutate the object itself.
     * @param modules
     * @param parameterMappings
     */
    expand(modules: Modules, parameterMappings: IParameterMapping[]): FixedTypeValueFieldSpec;
    getDepth(): number;
    toSpreadsheet(worksheet: Worksheet, row: IRowInput, depth: number): void;
    toString(): string;
}
//# sourceMappingURL=fixedTypeValueFieldSpec.d.ts.map