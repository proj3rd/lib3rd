import { ExtensionMarker } from './extensionMarker';
import { IntegerValue } from './integerValue';
import { ValueRange } from './valueRange';
export declare class SizeConstraint {
    constraint: Array<ExtensionMarker | IntegerValue | ValueRange>;
    private sizeConstraintTag;
    constructor(constraint: Array<ExtensionMarker | IntegerValue | ValueRange>);
    getDepth(): number;
    toString(): string;
}
//# sourceMappingURL=sizeConstraint.d.ts.map