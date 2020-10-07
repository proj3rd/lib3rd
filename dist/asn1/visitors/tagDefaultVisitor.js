"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable class-methods-use-this */
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
/**
 * # Grammar
 * ```
 * tagDefault: ((EXPLICIT_LITERAL | IMPLICIT_LITERAL | AUTOMATIC_LITERAL) TAGS_LITERAL)?
 * ```
 */
class TagDefaultVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    visitChildren(ctx) {
        if (ctx.childCount === 0) {
            return '';
        }
        switch (ctx.getChild(0).text) {
            case 'EXPLICIT':
                return 'EXPLICIT TAGS';
            case 'IMPLICIT':
                return 'IMPLICIT TAGS';
            case 'AUTOMATIC':
                return 'AUTOMATIC TAGS';
            default:
                throw Error();
        }
    }
    defaultResult() {
        return '';
    }
}
exports.TagDefaultVisitor = TagDefaultVisitor;
//# sourceMappingURL=tagDefaultVisitor.js.map