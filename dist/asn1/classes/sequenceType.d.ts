import { IParameterMapping } from '../expander';
import { AsnType } from './asnType';
import { Constraint } from './constraint';
import { ExtensionMarker } from './extensionMarker';
import { Modules } from './modules';
import { NamedType } from './namedType';
import { Optionality } from './optionality';
export declare class SequenceType {
    components: RootSequenceComponents[];
    private sequenceTypeTag;
    constructor(components: RootSequenceComponents[]);
    expand(modules: Modules, parameterMappings: IParameterMapping[]): SequenceType;
    setConstraints(constraints: Constraint[]): void;
    toString(): string;
}
export declare type RootSequenceComponents = ComponentType | ExtensionMarker | ExtensionAdditionGroup;
export declare type ExtensionAddition = ComponentType | ExtensionAdditionGroup;
export declare class ComponentType {
    name: string;
    asnType: AsnType;
    optionality: Optionality | undefined;
    tag: Tag;
    private componentTypeTag;
    constructor(namedType: NamedType, optionality: Optionality | undefined, tag: Tag);
    expand(modules: Modules, parameterMappings: IParameterMapping[]): ComponentType;
    /**
     * This method will return a string with a comma placeholder.
     * And it is discouraged to call `ComponentType.toString()` outside of
     * `SequenceType` and `ExtensionAdditionGroup`.
     */
    toString(): string;
}
export declare type Tag = string;
export declare class ExtensionAdditionGroup {
    version: number | undefined;
    components: ComponentType[];
    private extensionAdditionGroupTag;
    constructor(version: number | undefined, components: ComponentType[]);
    expand(modules: Modules, parameterMappings: IParameterMapping[]): ExtensionAdditionGroup;
    toString(): string;
}
//# sourceMappingURL=sequenceType.d.ts.map