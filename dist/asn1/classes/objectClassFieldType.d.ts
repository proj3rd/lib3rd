import { Worksheet } from 'exceljs';
import { IParameterMapping } from '../expander';
import { IRowInput } from '../../common/spreadsheet';
import { AsnType, DefinedObjectClass } from './asnType';
import { Constraint } from './constraint';
import { Modules } from './modules';
import { PrimitiveFieldName } from './primitiveFieldName';
/**
 * X.681 clause 14
 * ```
 * definedObjectClass.primitiveFieldName[0]....primitiveFieldName[n-1] ( constraint )
 * ```
 */
export declare class ObjectClassFieldType {
    definedObjectClass: DefinedObjectClass;
    fieldName: PrimitiveFieldName[];
    constraint: Constraint | undefined;
    private objectClassFieldType;
    constructor(definedObjectClass: DefinedObjectClass, fieldName: PrimitiveFieldName[]);
    expand(modules: Modules, parameterMappings: IParameterMapping[]): AsnType;
    getDepth(): number;
    setConstraints(constraints: Constraint[]): void;
    toSpreadsheet(worksheet: Worksheet, row: IRowInput, depth: number): void;
    toString(): string;
}
//# sourceMappingURL=objectClassFieldType.d.ts.map