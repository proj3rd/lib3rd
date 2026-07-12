"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BooleanValueVisitor = void 0;
/* eslint-disable class-methods-use-this */
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const unimpl_1 = require("../../utils/unimpl");
const booleanValue_1 = require("../classes/booleanValue");
/**
 * # Grammar
 * ```
 * booleanValue: TRUE_LITERAL | FALSE_LITERAL | TRUE_SMALL_LITERAL | FALSE_SMALL_LITERAL
 * ```
 */
class BooleanValueVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    visitChildren(ctx) {
        const { text } = ctx;
        if (text === 'TRUE'
            || text === 'true'
            || text === 'FALSE'
            || text === 'false') {
            return new booleanValue_1.BooleanValue(text);
        }
        throw Error();
    }
    defaultResult() {
        return unimpl_1.unimpl();
    }
}
exports.BooleanValueVisitor = BooleanValueVisitor;
//# sourceMappingURL=booleanValueVisitor.js.map