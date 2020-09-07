import { Worksheet } from 'exceljs';
import { IParameterMapping } from '../expander';
import { IRowInput } from '../formatter/spreadsheet';
import { AsnType } from './asnType';
import { Modules } from './modules';
import { ObjectSet } from './objectSet';
export declare class NamedType {
    name: string;
    asnType: AsnType | ObjectSet;
    private namedTypeTag;
    constructor(name: string, asnType: AsnType);
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