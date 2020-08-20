"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const formatter_1 = require("../formatter");
/**
 * TODO: ObjectSet only supports DefinedObjectSet currently.
 * Note: `SimpleTableConstraint` is equivalent to `ObjectSet`.
 */
class ObjectSet {
    constructor(objectSetSpec) {
        this.objectSetSpec = objectSetSpec;
    }
    toString() {
        const innerString = this.objectSetSpec
            .map((elementSetSpec) => elementSetSpec.toString())
            .join(',\n');
        const arrToString = ['{', formatter_1.indent(innerString), '}'];
        return arrToString.join('\n');
    }
}
exports.ObjectSet = ObjectSet;
//# sourceMappingURL=objectSet.js.map