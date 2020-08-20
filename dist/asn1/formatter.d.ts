import { ExtensionMarker } from './classes/extensionMarker';
import { IntegerValue } from './classes/integerValue';
import { ValueRange } from './classes/valueRange';
/**
 * Use case: `SIZE (...)` and `INTEGER (...)`
 * @param constraints
 */
export declare function getPermittedIntegerValues(constraints: Array<ExtensionMarker | IntegerValue | ValueRange>): string;
export declare function indent(text: string, tabSize?: number): string;
//# sourceMappingURL=formatter.d.ts.map