"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const formatter_1 = require("../formatter");
/**
 * X.680 clause 32.3
 * ```
 * { objectIdComponents[0] ... objectIdComponents[n-1] }
 * ```
 * # Limitations
 * A form of `{ definedValue objectIdComponentsList }` is not supported
 */
class ObjectIdentifierValue {
    constructor(objectIdComponentsList) {
        this.objectIdComponentsList = objectIdComponentsList;
    }
    /** TODO
     * Need to improve formatting for RAN3 procedure definitions.
     * Branching by the length is a workaround and not ideal.
     */
    toString() {
        if (this.objectIdComponentsList.length === 1) {
            return `{${this.objectIdComponentsList[0].toString()}}`;
        }
        const arrToString = ['{'];
        this.objectIdComponentsList.forEach((component, index) => {
            if (index % 2 !== 0) {
                return;
            }
            const componentNext = this.objectIdComponentsList[index + 1];
            if (componentNext === undefined) {
                arrToString.push(formatter_1.indent(component.toString()));
                return;
            }
            arrToString.push(formatter_1.indent(`${component.toString()}   ${componentNext.toString()}`));
        });
        arrToString.push('}');
        return arrToString.join('\n');
    }
}
exports.ObjectIdentifierValue = ObjectIdentifierValue;
//# sourceMappingURL=objectIdentifierValue.js.map