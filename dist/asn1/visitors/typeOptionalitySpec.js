"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const asnType_1 = require("./asnType");
/**
 * ANTLR4 grammar
 * ```
 * typeOptionalitySpec : OPTIONAL_LITERAL | (DEFAULT_LITERAL asnType)
 * ```
 */
class TypeOptionalitySpecVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    defaultResult() {
        return undefined;
    }
    visitChildren(typeOptionalitySpecCtx) {
        const [, asnTypeCtx] = typeOptionalitySpecCtx.children;
        if (asnTypeCtx) {
            return {
                optional: undefined,
                default: asnTypeCtx.accept(new asnType_1.AsnTypeVisitor()),
            };
        }
        else {
            return {
                optional: true,
            };
        }
    }
}
exports.TypeOptionalitySpecVisitor = TypeOptionalitySpecVisitor;
