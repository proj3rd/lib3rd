"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExportsVisitor = void 0;
/* eslint-disable class-methods-use-this */
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
/**
 * # Grammar
 * ```
 * exports: (
 *   EXPORST_LITERAL symbolsExported SEMI_COLON |
 *   EXPORTS LITERAL ALL_LITERAL SEMI_COLON
 * )?
 * ```
 */
class ExportsVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    visitChildren(ctx) {
        if (ctx.childCount === 0) {
            return null;
        }
        throw Error('Not implemented');
    }
    defaultResult() {
        return null;
    }
}
exports.ExportsVisitor = ExportsVisitor;
//# sourceMappingURL=exportsVisitor.js.map