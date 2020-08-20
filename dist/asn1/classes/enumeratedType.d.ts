import { IParameterMapping } from '../expander';
import { Constraint } from './constraint';
import { ExtensionMarker } from './extensionMarker';
import { Modules } from './modules';
export declare class EnumeratedType {
    items: EnumerationItem[];
    private enumeratedTypeTag;
    constructor(items: EnumerationItem[]);
    expand(modules: Modules, parameterMappings: IParameterMapping[]): EnumeratedType;
    setConstraints(constraints: Constraint[]): void;
    toString(): string;
}
export declare type EnumerationItem = string | ExtensionMarker;
//# sourceMappingURL=enumeratedType.d.ts.map