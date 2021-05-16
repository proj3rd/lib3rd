import { Worksheet } from 'exceljs';
import { IRowInput } from '../../common/spreadsheet';
import { IParameterMapping } from '../expander';
import { Modules } from './modules';
export declare class ExtensionMarker {
    static getInstance(): ExtensionMarker;
    private static instance;
    extensionMarkerTag: boolean;
    expand(modules: Modules, parameterMappings: IParameterMapping[]): ExtensionMarker;
    getDepth(): number;
    toSpreadsheet(worksheet: Worksheet, row: IRowInput, depth: number): void;
    toString(): string;
}
//# sourceMappingURL=extensionMarker.d.ts.map