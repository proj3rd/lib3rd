import { Worksheet } from 'exceljs';
import { IRowInput } from '../../common/spreadsheet';
import { IParameterMapping } from '../expander';
import { INamedBit } from '../types/namedBit';
import { Constraint } from './constraint';
import { Modules } from './modules';
export declare class BitStringType {
    constraint: Constraint | undefined;
    namedBitList: INamedBit[];
    reference: string | undefined;
    bitStringTypeTag: boolean;
    constructor(namedBitList?: INamedBit[]);
    static fromObject(obj: unknown): BitStringType;
    expand(modules: Modules, parameterMappings: IParameterMapping[]): BitStringType;
    getDepth(): number;
    setConstraints(constraints: Constraint[]): void;
    toSpreadsheet(worksheet: Worksheet, row: IRowInput, depth: number): void;
    toString(): string;
}
//# sourceMappingURL=bitStringType.d.ts.map