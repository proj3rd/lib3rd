"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const unionMarkLiteral_1 = require("../classes/unionMarkLiteral");
const unionMarkPipe_1 = require("../classes/unionMarkPipe");
/**
 * ANTLR4 grammar
 * ```
 * unionMark  :  PIPE  |  UNION_LITERAL
 * ```
 */
class UnionMarkVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    defaultResult() {
        return undefined;
    }
    visitChildren(unionMarkCtx) {
        switch (unionMarkCtx.text) {
            case '|':
                return new unionMarkPipe_1.UnionMarkPipe();
            case 'UNION':
                return new unionMarkLiteral_1.UnionMarkLiteral();
        }
    }
}
exports.UnionMarkVisitor = UnionMarkVisitor;
