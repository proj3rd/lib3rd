"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComponentRelationConstraint = void 0;
/**
 * X.682 clause 10.7
 * ```
 * { definedObjectSet } { atNotation[0], ..., atNotation[n-1] }
 * ```
 */
class ComponentRelationConstraint {
    constructor(definedObjectSet, atNotations = []) {
        this.definedObjectSet = definedObjectSet;
        this.atNotations = atNotations;
    }
    toString() {
        if (this.atNotations.length === 0) {
            return `{${this.definedObjectSet.toString()}}`;
        }
        const atNotations = this.atNotations
            .map((atNotation) => atNotation.toString())
            .join(', ');
        return `{${this.definedObjectSet.toString()}} {${atNotations}}`;
    }
}
exports.ComponentRelationConstraint = ComponentRelationConstraint;
//# sourceMappingURL=componentRelationConstraint.js.map