import { Worksheet } from 'exceljs';
import { IParameterMapping } from '../expander';
import { IRowInput } from '../../common/spreadsheet';
import { Constraint } from './constraint';
import { Modules } from './modules';
export declare class OctetStringType {
    constraint: Constraint | undefined;
    private octetStringTypeTag;
    expand(modules: Modules, parameterMappings: IParameterMapping[]): OctetStringType;
    getDepth(): number;
    setConstraints(constraints: Constraint[]): undefined;
    toSpreadsheet(worksheet: Worksheet, row: IRowInput, depth: number): void;
    toString(): string;
}
//# sourceMappingURL=octetStringType.d.ts.map