"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Syntax {
    constructor(literal, primitiveFieldName, optional) {
        this.literal = literal;
        this.primitiveFieldName = primitiveFieldName;
        this.optional = optional;
    }
    toString() {
        if (this.optional) {
            return `[${this.literal}    ${this.primitiveFieldName.toString()}]`;
        }
        return `${this.literal}    ${this.primitiveFieldName.toString()}`;
    }
}
exports.Syntax = Syntax;
//# sourceMappingURL=syntax.js.map