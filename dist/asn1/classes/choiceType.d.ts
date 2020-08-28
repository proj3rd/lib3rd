import { Worksheet } from 'exceljs';
import { IParameterMapping } from '../expander';
import { IRowInput } from '../formatter/spreadsheet';
import { Constraint } from './constraint';
import { ExtensionAdditionAlternativeGroup } from './extensionAdditionAlternativeGroup';
import { ExtensionMarker } from './extensionMarker';
import { Modules } from './modules';
import { NamedType } from './namedType';
export declare class ChoiceType {
    components: RootChoiceComponents[];
    private choiceTypeTag;
    constructor(components: RootChoiceComponents[]);
    expand(modules: Modules, parameterMappings: IParameterMapping[]): ChoiceType;
    getDepth(): number;
    setConstraints(constraints: Constraint[]): void;
    toSpreadsheet(worksheet: Worksheet, row: IRowInput, depth: number): void;
    toString(): string;
}
export declare type RootChoiceComponents = NamedType | ExtensionMarker | ExtensionAdditionAlternativeGroup;
export declare type ExtensionAdditionAlternative = NamedType | ExtensionAdditionAlternativeGroup;
//# sourceMappingURL=choiceType.d.ts.map