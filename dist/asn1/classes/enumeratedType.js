"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const unimpl_1 = require("unimpl");
class EnumeratedType {
    constructor(items) {
        this.items = items;
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
        const arrToString = [
            'ENUMERATED {',
            this.items.map((item) => item.toString()).join(', '),
            '}',
        ];
        return arrToString.join('');
    }
}
exports.EnumeratedType = EnumeratedType;
//# sourceMappingURL=enumeratedType.js.map