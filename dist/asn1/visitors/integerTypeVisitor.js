"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable class-methods-use-this */
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const integerType_1 = require("../classes/integerType");
const namedNumberListVisitor_1 = require("./namedNumberListVisitor");
/**
 * # Grammar
 * ```
 * integerType: INTEGER_LITERAL (L_BRACE namedNumberList R_BRACE)?
 * ```
 */
class IntegerTypeVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    visitChildren(ctx) {
        const namedNumberList = [];
        const namedNumberListCtx = ctx.namedNumberList();
        if (namedNumberListCtx !== undefined) {
            namedNumberList.push(...namedNumberListCtx.accept(new namedNumberListVisitor_1.NamedNumberListVisitor()));
        }
        return new integerType_1.IntegerType(namedNumberList);
    }
    defaultResult() {
        return new integerType_1.IntegerType();
    }
}
exports.IntegerTypeVisitor = IntegerTypeVisitor;
//# sourceMappingURL=integerTypeVisitor.js.map