"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjectSetReference = void 0;
const unimpl_1 = require("unimpl");
class ObjectSetReference {
    constructor(objectSetReference) {
        this.objectSetReference = objectSetReference;
    }
    // eslint-disable-next-line class-methods-use-this, no-unused-vars
    expand(modules, parameterMappings) {
        return unimpl_1.unimpl();
    }
    // eslint-disable-next-line class-methods-use-this
    getDepth() {
        return 0;
    }
    toString() {
        return this.objectSetReference;
    }
}
exports.ObjectSetReference = ObjectSetReference;
//# sourceMappingURL=objectSetReference.js.map