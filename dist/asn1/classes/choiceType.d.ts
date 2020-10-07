import { Worksheet } from 'exceljs';
import { IRowInput } from '../../common/spreadsheet';
import { IParameterMapping } from '../expander';
import { Constraint } from './constraint';
import { ExtensionAdditionAlternativeGroup } from './extensionAdditionAlternativeGroup';
import { ExtensionMarker } from './extensionMarker';
import { Modules } from './modules';
import { NamedType } from './namedType';
export declare type RootChoiceComponents = NamedType | ExtensionMarker | ExtensionAdditionAlternativeGroup;
export declare class ChoiceType {
    components: RootChoiceComponents[];
    private choiceTypeTag;
    constructor(components: RootChoiceComponents[]);
    /**
     * Expand `components` property. This will mutate the object itself.
     * @param modules
     * @param parameterMappings
     */
    expand(modules: Modules, parameterMappings: IParameterMapping[]): ChoiceType;
    getDepth(): number;
    setConstraints(constraints: Constraint[]): void;
    toSpreadsheet(worksheet: Worksheet, row: IRowInput, depth: number): void;
    toString(): string;
}
export declare type ExtensionAdditionAlternative = NamedType | ExtensionAdditionAlternativeGroup;
//# sourceMappingURL=choiceType.d.ts.map