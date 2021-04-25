"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlobalModuleReferenceVisitor = void 0;
/* eslint-disable class-methods-use-this */
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
/**
 * # Grammar
 * ```
 * globalModuleReference: IDENTIFIER assignedIdentifier
 * ```
 */
class GlobalModuleReferenceVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    visitChildren(ctx) {
        if (ctx.assignedIdentifier().text !== '') {
            throw Error();
        }
        return ctx.text;
    }
    defaultResult() {
        return '';
    }
}
exports.GlobalModuleReferenceVisitor = GlobalModuleReferenceVisitor;
//# sourceMappingURL=globalModuleReferenceVisitor.js.map