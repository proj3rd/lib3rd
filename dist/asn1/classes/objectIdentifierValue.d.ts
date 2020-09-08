import { Worksheet } from 'exceljs';
import { IParameterMapping } from '../expander';
import { IRowInput } from '../formatter/spreadsheet';
import { ObjectIdComponents } from '../types';
import { AsnType } from './asnType';
import { Modules } from './modules';
import { Value } from './value';
/**
 * X.680 clause 32.3
 * ```
 * { objectIdComponents[0] ... objectIdComponents[n-1] }
 * ```
 * # Limitations
 * A form of `{ definedValue objectIdComponentsList }` is not supported
 */
export declare class ObjectIdentifierValue {
    objectIdComponentsList: Array<ObjectIdComponents | /* the rest are applicable when expand */ AsnType | Value>;
    private objectIdentifierValueTag;
    private compoundComponentList;
    constructor(objectIdComponentsList: ObjectIdComponents[]);
    /**
     * Expand `objectIdComponentsList` property. This will mutate the object itself.
     * @param modules
     * @param parameterMappings
     */
    expand(modules: Modules, parameterMappings: IParameterMapping[]): ObjectIdentifierValue;
    getDepth(): number;
    toSpreadsheet(worksheet: Worksheet, row: IRowInput, depth: number): void;
    toString(): string;
    private compoundComponent;
}
//# sourceMappingURL=objectIdentifierValue.d.ts.map