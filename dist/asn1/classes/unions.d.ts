import { Worksheet } from 'exceljs';
import { IRowInput } from '../../common/spreadsheet';
import { IParameterMapping } from '../expander';
import { Intersections } from '../types/intersections';
import { Modules } from './modules';
export declare class Unions {
    intersectionsList: Intersections[];
    unionsTag: boolean;
    constructor(intersections: Intersections[]);
    static fromObject(obj: unknown): Unions;
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