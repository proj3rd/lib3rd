"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const namedType_1 = require("../classes/namedType");
const nullType_1 = require("../classes/nullType");
const asnTypeVisitor_1 = require("./asnTypeVisitor");
/**
 * # Grammar
 * ```
 * namedType: IDENTIFIER asnType
 * ```
 */
class NamedTypeVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    visitChildren(ctx) {
        const name = ctx.getChild(0).text;
        const asnType = ctx.asnType().accept(new asnTypeVisitor_1.AsnTypeVisitor());
        return new namedType_1.NamedType(name, asnType);
    }
    defaultResult() {
        return new namedType_1.NamedType('', nullType_1.NullType.getInstance());
    }
}
exports.NamedTypeVisitor = NamedTypeVisitor;
//# sourceMappingURL=namedTypeVisitor.js.map