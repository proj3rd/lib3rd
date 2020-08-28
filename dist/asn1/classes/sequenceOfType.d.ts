import { Worksheet } from 'exceljs';
import { IParameterMapping } from '../expander';
import { IRowInput } from '../formatter/spreadsheet';
import { AsnType } from './asnType';
import { Constraint } from './constraint';
import { Modules } from './modules';
import { NamedType } from './namedType';
export declare class SequenceOfType {
    baseType: AsnType | NamedType;
    constraint: Constraint | undefined;
    private sequenceOfTypeTag;
    constructor(baseType: AsnType | NamedType, constraint: Constraint | undefined);
    expand(modules: Modules, parameterMappings: IParameterMapping[]): SequenceOfType;
    getDepth(): number;
    setConstraints(constraints: Constraint[]): void;
    toSpreadsheet(worksheet: Worksheet, row: IRowInput, depth: number): void;
    toString(): string;
}
//# sourceMappingURL=sequenceOfType.d.ts.map