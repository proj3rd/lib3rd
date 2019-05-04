import { Base } from './base';
import { ComponentPresence } from './componentPresence';
import { ExtensionMarker } from './extensionMarker';
export declare class DefinedType extends Base {
    moduleReference: string;
    typeReference: string;
    withComponents: Array<ExtensionMarker | ComponentPresence>;
    setConstraint(constraint: any): DefinedType;
    expand(): DefinedType;
    toString(depth?: number): string;
}
