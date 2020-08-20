"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const unimpl_1 = require("unimpl");
class BooleanType {
    constructor() {
    }
    static getInstance() {
        return BooleanType.instance;
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
        return 'BOOLEAN';
    }
}
exports.BooleanType = BooleanType;
BooleanType.instance = new BooleanType();
//# sourceMappingURL=booleanType.js.map