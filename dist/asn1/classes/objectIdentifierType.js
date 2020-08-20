"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const unimpl_1 = require("unimpl");
class ObjectIdentifierType {
    expand(modules, parameterMappings) {
        return this;
    }
    setConstraints(constraints) {
        if (constraints.length > 0) {
            return unimpl_1.todo();
        }
    }
    toString() {
        return 'OBJECT IDENTIFIER';
    }
}
exports.ObjectIdentifierType = ObjectIdentifierType;
//# sourceMappingURL=objectIdentifierType.js.map