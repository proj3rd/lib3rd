"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const enumerated_1 = require("../classes/enumerated");
const enumerations_1 = require("./enumerations");
/**
 * ANTLR4 grammar
 * ```
 * enumeratedType : ENUMERATED_LITERAL L_BRACE enumerations R_BRACE
 * ```
 */
class EnumeratedTypeVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    defaultResult() {
        return undefined;
    }
    visitChildren(enumeratedTypeCtx) {
        const enumerationsCtx = enumeratedTypeCtx.children[2];
        return new enumerated_1.Enumerated(enumerationsCtx.accept(new enumerations_1.EnumerationsVisitor()));
    }
}
exports.EnumeratedTypeVisitor = EnumeratedTypeVisitor;
