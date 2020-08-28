import { Worksheet } from 'exceljs';
import { IParameterMapping } from '../expander';
import { IRowInput } from '../formatter/spreadsheet';
import { Modules } from './modules';
export declare class ExtensionMarker {
    static getInstance(): ExtensionMarker;
    private static instance;
    private extensionMarkerTag;
    private constructor();
    expand(modules: Modules, parameterMappings: IParameterMapping[]): ExtensionMarker;
    getDepth(): number;
    toSpreadsheet(worksheet: Worksheet, row: IRowInput, depth: number): void;
    toString(): string;
}
//# sourceMappingURL=extensionMarker.d.ts.map