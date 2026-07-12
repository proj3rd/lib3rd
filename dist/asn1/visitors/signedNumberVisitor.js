"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignedNumberVisitor = void 0;
/* eslint-disable class-methods-use-this */
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const unimpl_1 = require("../../utils/unimpl");
/**
 * # Grammar
 * ```
 * signedNumber: (MINUS)? NUMBER
 * ```
 */
class SignedNumberVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    visitChildren(ctx) {
        return ctx.text;
    }
    defaultResult() {
        return unimpl_1.unimpl();
    }
}
exports.SignedNumberVisitor = SignedNumberVisitor;
//# sourceMappingURL=signedNumberVisitor.js.map