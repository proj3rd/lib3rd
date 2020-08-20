import { _ElementSetSpec } from '../types';
import { ExtensionMarker } from './extensionMarker';
export declare type ElementSetSpecList = Array<_ElementSetSpec | ExtensionMarker>;
export declare class SubtypeConstraint {
    elementSetSpecList: ElementSetSpecList;
    private subtypeConstraintTag;
    constructor(elementSetSpecList: ElementSetSpecList);
    toString(): string;
}
//# sourceMappingURL=subtypeConstraint.d.ts.map