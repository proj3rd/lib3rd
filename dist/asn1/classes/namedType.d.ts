import { Worksheet } from 'exceljs';
import { IRowInput } from '../../common/spreadsheet';
import { IParameterMapping } from '../expander';
import { AsnType } from '../types/asnType';
import { Modules } from './modules';
import { ObjectSet } from './objectSet';
export declare class NamedType {
    name: string;
    asnType: AsnType | ObjectSet;
    namedTypeTag: boolean;
    constructor(name: string, asnType: AsnType);
    static fromObject(obj: unknown): NamedType;
    /**
     * Expand `asnType` property. This will mutate the object itself.
     * @param modules
     * @param parameterMappings
     */
    expand(modules: Modules, parameterMappings: IParameterMapping[]): NamedType;
    getDepth(): number;
    toSpreadsheet(worksheet: Worksheet, row: IRowInput, depth: number): void;
    toString(): string;
}
//# sourceMappingURL=namedType.d.ts.map