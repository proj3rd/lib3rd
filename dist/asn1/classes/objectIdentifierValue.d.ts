import { Worksheet } from 'exceljs';
import { IRowInput } from '../../common/spreadsheet';
import { IParameterMapping } from '../expander';
import { ObjectIdComponents } from '../types';
import { AsnType } from '../types/asnType';
import { Value } from '../types/value';
import { Modules } from './modules';
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
    reference: string | undefined;
    objectIdentifierValueTag: boolean;
    private compoundComponentList;
    constructor(objectIdComponentsList: ObjectIdComponents[]);
    static fromObject(obj: unknown): ObjectIdentifierValue;
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