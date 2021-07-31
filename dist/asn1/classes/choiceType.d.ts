import { Worksheet } from 'exceljs';
import { IRowInput } from '../../common/spreadsheet';
import { IParameterMapping } from '../expander';
import { RootChoiceComponents } from '../types/rootChoiceComponents';
import { Constraint } from './constraint';
import { ExtensionAdditionAlternativeGroup } from './extensionAdditionAlternativeGroup';
import { Modules } from './modules';
import { NamedType } from './namedType';
export declare class ChoiceType {
    components: RootChoiceComponents[];
    reference: string | undefined;
    choiceTypeTag: boolean;
    constructor(components: RootChoiceComponents[]);
    static fromObject(obj: unknown): ChoiceType;
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