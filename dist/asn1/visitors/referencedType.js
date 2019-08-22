"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const definedType_1 = require("./definedType");
/**
 * ANTLR4 grammar
 * ```
 * referencedType :
 *   definedType
 * ```
 */
class ReferencedTypeVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    defaultResult() {
        return undefined;
    }
    visitChildren(referencedTypeCtx) {
        const definedTypeCtx = referencedTypeCtx.children[0];
        return definedTypeCtx.accept(new definedType_1.DefinedTypeVisitor());
    }
}
exports.ReferencedTypeVisitor = ReferencedTypeVisitor;
