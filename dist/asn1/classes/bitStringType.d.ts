import { Worksheet } from 'exceljs';
import { IParameterMapping } from '../expander';
import { IRowInput } from '../../common/spreadsheet';
import { INamedBit } from '../types';
import { Constraint } from './constraint';
import { Modules } from './modules';
export declare class BitStringType {
    constraint: Constraint | undefined;
    namedBitList: INamedBit[];
    private bitStringTypeTag;
    constructor(namedBitList?: INamedBit[]);
    expand(modules: Modules, parameterMappings: IParameterMapping[]): BitStringType;
    getDepth(): number;
    setConstraints(constraints: Constraint[]): undefined;
    toSpreadsheet(worksheet: Worksheet, row: IRowInput, depth: number): void;
    toString(): string;
}
//# sourceMappingURL=bitStringType.d.ts.map