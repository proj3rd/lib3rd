import { Worksheet } from 'exceljs';
import { IParameterMapping } from '../expander';
import { IRowInput } from '../../common/spreadsheet';
import { Modules } from './modules';
import { NamedType } from './namedType';
export declare class ExtensionAdditionAlternativeGroup {
    version: number | undefined;
    components: NamedType[];
    private extensionAdditionAlternativeGroupTag;
    constructor(version: number | undefined, components: NamedType[]);
    /**
     * Expand `components` property. This will mutate the object itself.
     * @param modules
     * @param parameterMappings
     */
    expand(modules: Modules, parameterMappings: IParameterMapping[]): ExtensionAdditionAlternativeGroup;
    getDepth(): number;
    toSpreadsheet(worksheet: Worksheet, row: IRowInput, depth: number): void;
    toString(): string;
    private openingBracket;
}
//# sourceMappingURL=extensionAdditionAlternativeGroup.d.ts.map