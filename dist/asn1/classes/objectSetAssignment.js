"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const unimpl_1 = require("unimpl");
/**
 * X.681 clause 12.1
 * ```
 * name definedObjectClass ::= objectSet
 * ```
 */
class ObjectSetAssignment {
    constructor(name, definedObjectClass, objectSet) {
        this.name = name;
        this.definedObjectClass = definedObjectClass;
        this.objectSet = objectSet;
    }
    expand(modules, parameterMappings) {
        return unimpl_1.todo();
    }
    toString() {
        return `${this.name} ${this.definedObjectClass.toString()} ::= ${this.objectSet.toString()}`;
    }
}
exports.ObjectSetAssignment = ObjectSetAssignment;
//# sourceMappingURL=objectSetAssignment.js.map