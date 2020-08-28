import { Worksheet } from 'exceljs';
import { IParameterMapping } from '../expander';
import { IRowInput } from '../formatter/spreadsheet';
import { AsnType } from './asnType';
import { Modules } from './modules';
export declare class NamedType {
    name: string;
    asnType: AsnType;
    private namedTypeTag;
    constructor(name: string, asnType: AsnType);
    expand(modules: Modules, parameterMappings: IParameterMapping[]): NamedType;
    getDepth(): number;
    toSpreadsheet(worksheet: Worksheet, row: IRowInput, depth: number): void;
    toString(): string;
}
//# sourceMappingURL=namedType.d.ts.map