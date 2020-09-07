import { Worksheet } from 'exceljs';
import { IParameterMapping } from '../expander';
import { IRowInput } from '../formatter/spreadsheet';
import { AsnType } from './asnType';
import { Modules } from './modules';
import { NamedType } from './namedType';
import { ObjectSet } from './objectSet';
import { Optionality } from './optionality';
import { Tag } from './sequenceType';
export declare class ComponentType {
    name: string;
    asnType: AsnType | ObjectSet;
    optionality: Optionality | undefined;
    tag: Tag;
    private componentTypeTag;
    constructor(namedType: NamedType, optionality: Optionality | undefined, tag: Tag);
    /**
     * Expand `asnType` property. This will mutate the object itself.
     * @param modules
     * @param parameterMappings
     */
    expand(modules: Modules, parameterMappings: IParameterMapping[]): ComponentType;
    getDepth(): number;
    toSpreadsheet(worksheet: Worksheet, row: IRowInput, depth: number): void;
    /**
     * This method will return a string with a comma placeholder.
     * And it is discouraged to call `ComponentType.toString()` outside of
     * `SequenceType` and `ExtensionAdditionGroup`.
     */
    toString(): string;
}
//# sourceMappingURL=componentType.d.ts.map