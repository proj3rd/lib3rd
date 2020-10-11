import { Worksheet } from 'exceljs';
import { IRowInput } from '../../common/spreadsheet';
import { IParameterMapping } from '../expander';
import { Constraint } from './constraint';
import { ExtensionMarker } from './extensionMarker';
import { Modules } from './modules';
export declare type EnumerationItem = string | ExtensionMarker;
export declare class EnumeratedType {
    items: EnumerationItem[];
    reference: string | undefined;
    private enumeratedTypeTag;
    constructor(items: EnumerationItem[]);
    expand(modules: Modules, parameterMappings: IParameterMapping[]): EnumeratedType;
    getDepth(): number;
    setConstraints(constraints: Constraint[]): void;
    toSpreadsheet(worksheet: Worksheet, row: IRowInput, depth: number): void;
    toString(): string;
}
//# sourceMappingURL=enumeratedType.d.ts.map