import { Worksheet } from 'exceljs';
import { IRowInput } from '../../common/spreadsheet';
import { IParameterMapping } from '../expander';
import { Constraint } from './constraint';
import { Modules } from './modules';
export declare class OctetStringType {
    constraint: Constraint | undefined;
    reference: string | undefined;
    private octetStringTypeTag;
    expand(modules: Modules, parameterMappings: IParameterMapping[]): OctetStringType;
    getDepth(): number;
    setConstraints(constraints: Constraint[]): void;
    toSpreadsheet(worksheet: Worksheet, row: IRowInput, depth: number): void;
    toString(): string;
}
//# sourceMappingURL=octetStringType.d.ts.map