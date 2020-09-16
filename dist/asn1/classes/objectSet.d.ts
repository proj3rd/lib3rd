import { Worksheet } from 'exceljs';
import { IParameterMapping } from '../expander';
import { IRowInput } from '../../common/spreadsheet';
import { _ElementSetSpecs } from '../types';
import { Modules } from './modules';
/**
 * TODO: ObjectSet only supports DefinedObjectSet currently.
 * Note: `SimpleTableConstraint` is equivalent to `ObjectSet`.
 */
export declare class ObjectSet {
    objectSetSpec: _ElementSetSpecs;
    private objectSetTag;
    constructor(objectSetSpec: _ElementSetSpecs);
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