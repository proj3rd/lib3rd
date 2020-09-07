"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const unimpl_1 = require("unimpl");
class ObjectSetReference {
    constructor(objectSetReference) {
        this.objectSetReference = objectSetReference;
    }
    expand(modules, parameterMappings) {
        return unimpl_1.unimpl();
    }
    getDepth() {
        return 0;
    }
    toString() {
        return this.objectSetReference;
    }
}
exports.ObjectSetReference = ObjectSetReference;
//# sourceMappingURL=objectSetReference.js.map