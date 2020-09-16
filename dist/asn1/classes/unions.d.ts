import { Worksheet } from 'exceljs';
import { IParameterMapping } from '../expander';
import { IRowInput } from '../../common/spreadsheet';
import { _Intersections } from '../types';
import { Modules } from './modules';
export declare class Unions {
    intersectionsList: _Intersections[];
    private unionsTag;
    constructor(intersections: _Intersections[]);
    /**
     * Expand `intersectionsList` property. This will mutate the object itself.
     * @param modules
     * @param parameterMappings
     */
    expand(modules: Modules, parameterMappings: IParameterMapping[]): Unions;
    getDepth(): number;
    toSpreadsheet(worksheet: Worksheet, row: IRowInput, depth: number): void;
    toString(): string;
}
//# sourceMappingURL=unions.d.ts.map