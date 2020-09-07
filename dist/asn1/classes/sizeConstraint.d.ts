import { IParameterMapping } from '../expander';
import { ExtensionMarker } from './extensionMarker';
import { IntegerValue } from './integerValue';
import { Modules } from './modules';
import { ValueRange } from './valueRange';
export declare class SizeConstraint {
    constraint: Array<ExtensionMarker | IntegerValue | ValueRange>;
    private sizeConstraintTag;
    constructor(constraint: Array<ExtensionMarker | IntegerValue | ValueRange>);
    /**
     * Expand `constraint` property. This will mutate the object itself.
     * @param modules
     * @param parameterMappings
     */
    expand(modules: Modules, parameterMappings: IParameterMapping[]): SizeConstraint;
    getDepth(): number;
    toString(): string;
}
//# sourceMappingURL=sizeConstraint.d.ts.map