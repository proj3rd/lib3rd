import { IParameterMapping } from '../expander';
import { Constraint } from './constraint';
import { ExtensionMarker } from './extensionMarker';
import { Modules } from './modules';
import { NamedType } from './namedType';
export declare class ChoiceType {
    components: RootChoiceComponents[];
    private choiceTypeTag;
    constructor(components: RootChoiceComponents[]);
    expand(modules: Modules, parameterMappings: IParameterMapping[]): ChoiceType;
    setConstraints(constraints: Constraint[]): void;
    toString(): string;
}
export declare type RootChoiceComponents = NamedType | ExtensionMarker | ExtensionAdditionAlternativeGroup;
export declare type ExtensionAdditionAlternative = NamedType | ExtensionAdditionAlternativeGroup;
export declare class ExtensionAdditionAlternativeGroup {
    version: number | undefined;
    components: NamedType[];
    private extensionAdditionAlternativeGroupTag;
    constructor(version: number | undefined, components: NamedType[]);
    expand(modules: Modules, parameterMappings: IParameterMapping[]): ExtensionAdditionAlternativeGroup;
    toString(): string;
}
//# sourceMappingURL=choiceType.d.ts.map