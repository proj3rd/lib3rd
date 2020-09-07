import { IParameterMapping } from '../expander';
import { _ElementSetSpec } from '../types';
import { ExtensionMarker } from './extensionMarker';
import { Modules } from './modules';
export declare type ElementSetSpecList = Array<_ElementSetSpec | ExtensionMarker>;
export declare class SubtypeConstraint {
    elementSetSpecList: ElementSetSpecList;
    private subtypeConstraintTag;
    constructor(elementSetSpecList: ElementSetSpecList);
    /**
     * Expand `elementSetSpecList` property. This will mutate the object itself.
     * @param modules
     * @param parameterMappings
     */
    expand(modules: Modules, parameterMappings: IParameterMapping[]): SubtypeConstraint;
    toString(): string;
}
//# sourceMappingURL=subtypeConstraint.d.ts.map