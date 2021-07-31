import { Worksheet } from 'exceljs';
import { IRowInput } from '../../common/spreadsheet';
import { IParameterMapping } from '../expander';
import { Constraint } from './constraint';
import { Modules } from './modules';
export declare class ObjectIdentifierType {
    objectIdentifierTypeTag: boolean;
    reference: string | undefined;
    static fromObject(obj: unknown): ObjectIdentifierType;
    expand(modules: Modules, parameterMappings: IParameterMapping[]): ObjectIdentifierType;
    getDepth(): number;
    setConstraints(constraints: Constraint[]): void;
    toSpreadsheet(worksheet: Worksheet, row: IRowInput, depth: number): void;
    toString(): string;
}
//# sourceMappingURL=objectIdentifierType.d.ts.map