import { Worksheet } from 'exceljs';
import { IParameterMapping } from '../expander';
import { IRowInput } from '../formatter/spreadsheet';
import { Constraint } from './constraint';
import { ExtensionMarker } from './extensionMarker';
import { Modules } from './modules';
export declare class EnumeratedType {
    items: EnumerationItem[];
    private enumeratedTypeTag;
    constructor(items: EnumerationItem[]);
    expand(modules: Modules, parameterMappings: IParameterMapping[]): EnumeratedType;
    getDepth(): number;
    setConstraints(constraints: Constraint[]): void;
    toSpreadsheet(worksheet: Worksheet, row: IRowInput, depth: number): void;
    toString(): string;
}
export declare type EnumerationItem = string | ExtensionMarker;
//# sourceMappingURL=enumeratedType.d.ts.map