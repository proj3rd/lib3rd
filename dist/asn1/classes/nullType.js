"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const unimpl_1 = require("unimpl");
class NullType {
    constructor() {
    }
    static getInstance() {
        return NullType.instance;
    }
    expand(modules, parameterMappings) {
        return this;
    }
    setConstraints(constraints) {
        if (constraints.length > 0) {
            unimpl_1.unimpl();
        }
    }
    toString() {
        return 'NULL';
    }
}
exports.NullType = NullType;
NullType.instance = new NullType();
//# sourceMappingURL=nullType.js.map