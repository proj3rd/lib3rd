import { Worksheet } from 'exceljs';
import { IRowInput } from '../../common/spreadsheet';
import { IParameterMapping } from '../expander';
import { INamedNumber } from '../types/namedNumber';
import { Constraint } from './constraint';
import { Modules } from './modules';
export declare class IntegerType {
    constraint: Constraint | undefined;
    namedNumberList: INamedNumber[];
    reference: string | undefined;
    integerTypeTag: boolean;
    constructor(namedNumberList?: INamedNumber[]);
    static fromObject(obj: unknown): IntegerType;
    expand(modules: Modules, parameterMappings: IParameterMapping[]): IntegerType;
    getDepth(): number;
    setConstraints(constraints: Constraint[]): void;
    toSpreadsheet(worksheet: Worksheet, row: IRowInput, depth: number): void;
    toString(): string;
}
//# sourceMappingURL=integerType.d.ts.map