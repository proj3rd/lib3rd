import { Worksheet } from 'exceljs';
import { IParameterMapping } from '../expander';
import { IRowInput } from '../../common/spreadsheet';
import { INamedNumber } from '../types';
import { Constraint } from './constraint';
import { Modules } from './modules';
export declare class IntegerType {
    constraint: Constraint | undefined;
    namedNumberList: INamedNumber[];
    private integerTypeTag;
    constructor(namedNumberList?: INamedNumber[]);
    expand(modules: Modules, parameterMappings: IParameterMapping[]): IntegerType;
    getDepth(): number;
    setConstraints(constraints: Constraint[]): undefined;
    toSpreadsheet(worksheet: Worksheet, row: IRowInput, depth: number): void;
    toString(): string;
}
//# sourceMappingURL=integerType.d.ts.map