"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Syntax {
    constructor(literal, primitiveFieldName, optional = false) {
        this.literal = literal;
        this.primitiveFieldName = primitiveFieldName;
        this.optional = optional;
    }
}
exports.Syntax = Syntax;
