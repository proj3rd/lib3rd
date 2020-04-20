"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("./base");
class Syntax extends base_1.Base {
    constructor(literal, primitiveFieldName, optional = false) {
        super();
        this.literal = literal;
        this.primitiveFieldName = primitiveFieldName;
        this.optional = optional;
    }
    depthMax() {
        return 0;
    }
    expand(asn1Pool, moduleName, parameterList) {
        return this;
    }
    fillWorksheet(ieElem, ws, row, col, depthMax, constants, formatConfig, depth) {
        throw Error('Syntax.fillWorksheet() shall not be called independently');
    }
    replaceParameters(parameterMapping) {
        return this;
    }
    setConstraint(constraints) {
        return this;
    }
    toString() {
        const syntax = `${this.literal.padEnd(48)}    ${this.primitiveFieldName}`;
        return this.optional ? `[${syntax}]` : syntax;
    }
}
exports.Syntax = Syntax;
