"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("./base");
class WithSyntaxSpec extends base_1.Base {
    constructor(syntaxList) {
        super();
        this.syntaxList = syntaxList;
    }
    depthMax() {
        return 0;
    }
    expand(asn1Pool, moduleName, parameterList) {
        return this;
    }
    fillWorksheet(ieElem, ws, row, col, depthMax, constants, formatConfig, depth) {
        throw Error('WithSyntaxSpec.fillWorksheet() shall not be called independently');
    }
    replaceParameters(parameterMapping) {
        // Do nothing
    }
    setConstraint(constraints) {
        return this;
    }
    toString() {
        return [
            'WITH SYNTAX {',
            ...this.syntaxList.map((syntax) => this.indent(syntax.toString())),
            '}',
        ].join('\n');
    }
}
exports.WithSyntaxSpec = WithSyntaxSpec;
