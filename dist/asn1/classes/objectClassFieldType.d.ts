import { Worksheet } from 'exceljs';
import { IRowInput } from '../../common/spreadsheet';
import { IParameterMapping } from '../expander';
import { AsnType } from '../types/asnType';
import { DefinedObjectClass } from './asnType';
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
    reference: string | undefined;
    objectClassFieldType: boolean;
    constructor(definedObjectClass: DefinedObjectClass, fieldName: PrimitiveFieldName[]);
    static fromObject(obj: unknown): ObjectClassFieldType;
    expand(modules: Modules, parameterMappings: IParameterMapping[]): AsnType;
    getDepth(): number;
    setConstraints(constraints: Constraint[]): void;
    toSpreadsheet(worksheet: Worksheet, row: IRowInput, depth: number): void;
    toString(): string;
}
//# sourceMappingURL=objectClassFieldType.d.ts.map