"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const namedType_1 = require("../classes/namedType");
const asnType_1 = require("./asnType");
/**
 * ANTLR4
 * ```
 * namedType : IDENTIFIER   asnType
 * ```
 */
class NamedTypeVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    defaultResult() {
        return undefined;
    }
    visitChildren(namedTypeCtx) {
        const childCtxes = namedTypeCtx.children;
        const nameCtx = childCtxes[0];
        const asnTypeCtx = childCtxes[1];
        const named = nameCtx.text;
        const asnType = asnTypeCtx.accept(new asnType_1.AsnTypeVisitor());
        return new namedType_1.NamedType(named, asnType);
    }
}
exports.NamedTypeVisitor = NamedTypeVisitor;
