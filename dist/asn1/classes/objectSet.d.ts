import { Worksheet } from 'exceljs';
import { IRowInput } from '../../common/spreadsheet';
import { IParameterMapping } from '../expander';
import { ElementSetSpecs } from '../types/elementSetSpecs';
import { Modules } from './modules';
/**
 * TODO: ObjectSet only supports DefinedObjectSet currently.
 * Note: `SimpleTableConstraint` is equivalent to `ObjectSet`.
 */
export declare class ObjectSet {
    objectSetSpec: ElementSetSpecs;
    reference: string | undefined;
    objectSetTag: boolean;
    constructor(objectSetSpec: ElementSetSpecs);
    static fromObject(obj: unknown): ObjectSet;
    /**
     * Expand `objectSetSpec` property. This will mutate the object itself.
     * @param modules
     * @param parameterMappings
     */
    expand(modules: Modules, parameterMappings: IParameterMapping[]): ObjectSet;
    getDepth(): number;
    toSpreadsheet(worksheet: Worksheet, row: IRowInput, depth: number): void;
    toString(): string;
}
//# sourceMappingURL=objectSet.d.ts.map