import { Worksheet } from 'exceljs';
import { IParameterMapping } from '../expander';
import { IRowInput } from '../../common/spreadsheet';
import { Constraint } from './constraint';
import { Modules } from './modules';
export declare class ObjectIdentifierType {
    static getInstance(): ObjectIdentifierType;
    private static instance;
    private objectIdentifierTypeTag;
    expand(modules: Modules, parameterMappings: IParameterMapping[]): ObjectIdentifierType;
    getDepth(): number;
    setConstraints(constraints: Constraint[]): undefined;
    toSpreadsheet(worksheet: Worksheet, row: IRowInput, depth: number): void;
    toString(): string;
}
//# sourceMappingURL=objectIdentifierType.d.ts.map