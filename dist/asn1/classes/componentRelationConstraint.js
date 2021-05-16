"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComponentRelationConstraint = void 0;
const constants_1 = require("../constants");
const definedObjectSet_1 = require("../types/definedObjectSet");
const atNotation_1 = require("./atNotation");
/**
 * X.682 clause 10.7
 * ```
 * { definedObjectSet } { atNotation[0], ..., atNotation[n-1] }
 * ```
 */
class ComponentRelationConstraint {
    constructor(definedObjectSet, atNotations = []) {
        this.componentRelationConstraintTag = true;
        this.definedObjectSet = definedObjectSet;
        this.atNotations = atNotations;
    }
    static fromObject(obj) {
        const { definedObjectSet: definedObjectSetObj, atNotations: atNotationsObj, componentRelationConstraintTag, } = obj;
        if (!componentRelationConstraintTag) {
            throw Error(constants_1.MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
        }
        const definedObjectSet = definedObjectSet_1.DefinedObjectSetFromObject(definedObjectSetObj);
        if (!(atNotationsObj instanceof Array)) {
            throw Error(constants_1.MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
        }
        const atNotations = atNotationsObj.map((item) => atNotation_1.AtNotation.fromObject(item));
        return new ComponentRelationConstraint(definedObjectSet, atNotations);
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