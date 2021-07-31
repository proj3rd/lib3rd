import { Worksheet } from 'exceljs';
import { IRowInput } from '../../common/spreadsheet';
import { IParameterMapping } from '../expander';
import { EnumerationItem } from '../types/enumerationItem';
import { Constraint } from './constraint';
import { Modules } from './modules';
export declare class EnumeratedType {
    items: EnumerationItem[];
    reference: string | undefined;
    enumeratedTypeTag: boolean;
    constructor(items: EnumerationItem[]);
    static fromObject(obj: unknown): EnumeratedType;
    expand(modules: Modules, parameterMappings: IParameterMapping[]): EnumeratedType;
    getDepth(): number;
    setConstraints(constraints: Constraint[]): void;
    toSpreadsheet(worksheet: Worksheet, row: IRowInput, depth: number): void;
    toString(): string;
}
//# sourceMappingURL=enumeratedType.d.ts.map