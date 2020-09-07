import { Worksheet } from 'exceljs';
import { IParameterMapping } from '../expander';
import { IRowInput } from '../formatter/spreadsheet';
import { ComponentType } from './componentType';
import { Modules } from './modules';
export declare class ExtensionAdditionGroup {
    version: number | undefined;
    components: ComponentType[];
    private extensionAdditionGroupTag;
    constructor(version: number | undefined, components: ComponentType[]);
    /**
     * Expand `components` property. This will mutate the object itself.
     * @param modules
     * @param parameterMappings
     */
    expand(modules: Modules, parameterMappings: IParameterMapping[]): ExtensionAdditionGroup;
    getDepth(): number;
    toSpreadsheet(worksheet: Worksheet, row: IRowInput, depth: number): void;
    toString(): string;
    private openingBracket;
}
//# sourceMappingURL=extensionAdditionGroup.d.ts.map