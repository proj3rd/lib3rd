import { ComponentPresence } from './componentPresence';
import { ExtensionMarker } from './extensionMarker';
export declare type TypeConstraintsComponent = ComponentPresence | ExtensionMarker;
/**
 * Currently it supports only MultipleTypeConstraints
 */
export declare class InnerTypeConstraints {
    components: TypeConstraintsComponent[];
    private innerTypeConstraintsTag;
    constructor(components: TypeConstraintsComponent[]);
    toString(): string;
}
//# sourceMappingURL=innerTypeConstraints.d.ts.map