import { IParameterMapping } from '../expander';
import { ElementSetSpec } from '../types/elementSetSpec';
import { ExtensionMarker } from './extensionMarker';
import { Modules } from './modules';
export declare type ElementSetSpecList = Array<ElementSetSpec | ExtensionMarker>;
export declare class SubtypeConstraint {
    elementSetSpecList: ElementSetSpecList;
    subtypeConstraintTag: boolean;
    constructor(elementSetSpecList: ElementSetSpecList);
    static fromObject(obj: unknown): SubtypeConstraint;
    /**
     * Expand `elementSetSpecList` property. This will mutate the object itself.
     * @param modules
     * @param parameterMappings
     */
    expand(modules: Modules, parameterMappings: IParameterMapping[]): SubtypeConstraint;
    toString(): string;
}
//# sourceMappingURL=subtypeConstraint.d.ts.map