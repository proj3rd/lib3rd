import { ComponentPresence } from './componentPresence';
import { ExtensionMarker } from './extensionMarker';
/**
 * Currently it supports only MultipleTypeConstraints
 */
export declare class InnerTypeConstraints {
    components: TypeConstraintsComponent[];
    private innerTypeConstraintsTag;
    constructor(components: TypeConstraintsComponent[]);
    toString(): string;
}
export declare type TypeConstraintsComponent = ComponentPresence | ExtensionMarker;
//# sourceMappingURL=innerTypeConstraints.d.ts.map