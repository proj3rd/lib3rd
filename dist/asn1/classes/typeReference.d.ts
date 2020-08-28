import { Worksheet } from 'exceljs';
import { IParameterMapping } from '../expander';
import { IRowInput } from '../formatter/spreadsheet';
import { AsnType } from './asnType';
import { Constraint } from './constraint';
import { Modules } from './modules';
export declare class TypeReference {
    typeReference: string;
    constraint: Constraint | undefined;
    private typeReferenceTag;
    constructor(typeReference: string);
    expand(modules: Modules, parameterMappings: IParameterMapping[]): AsnType;
    getDepth(): number;
    setConstraints(constraints: Constraint[]): undefined;
    toSpreadsheet(worksheet: Worksheet, row: IRowInput, depth: number): void;
    toString(): string;
}
//# sourceMappingURL=typeReference.d.ts.map