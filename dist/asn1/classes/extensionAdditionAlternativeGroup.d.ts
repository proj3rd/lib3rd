import { Worksheet } from 'exceljs';
import { IRowInput } from '../../common/spreadsheet';
import { IParameterMapping } from '../expander';
import { Modules } from './modules';
import { NamedType } from './namedType';
export declare class ExtensionAdditionAlternativeGroup {
    version: number | undefined;
    components: NamedType[];
    extensionAdditionAlternativeGroupTag: boolean;
    constructor(version: number | undefined, components: NamedType[]);
    static fromObject(obj: unknown): ExtensionAdditionAlternativeGroup;
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