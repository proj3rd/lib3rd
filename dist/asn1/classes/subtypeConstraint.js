"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SubtypeConstraint {
    constructor(elementSetSpecList) {
        this.elementSetSpecList = elementSetSpecList;
    }
    toString() {
        return this.elementSetSpecList
            .map((elementSetSpec) => elementSetSpec.toString())
            .join(', ');
    }
}
exports.SubtypeConstraint = SubtypeConstraint;
//# sourceMappingURL=subtypeConstraint.js.map