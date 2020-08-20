"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Reference {
    constructor(name, parameterized = false) {
        this.name = name;
        this.parameterized = parameterized;
    }
    toString() {
        if (this.parameterized) {
            return `${this.name}{}`;
        }
        return this.name;
    }
}
exports.Reference = Reference;
//# sourceMappingURL=asnSymbol.js.map