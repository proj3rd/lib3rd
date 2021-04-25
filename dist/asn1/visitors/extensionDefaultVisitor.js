"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExtensionDefaultVisitor = void 0;
/* eslint-disable class-methods-use-this */
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
/**
 * # Grammar
 * ```
 * extensionDefault: (EXTENSIBILITY_LITERAL IMPLIED_LITERAL)?
 * ```
 */
class ExtensionDefaultVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    visitChildren(ctx) {
        if (ctx.childCount === 0) {
            return '';
        }
        return 'EXTENSIBILITY IMPLIED';
    }
    defaultResult() {
        return '';
    }
}
exports.ExtensionDefaultVisitor = ExtensionDefaultVisitor;
//# sourceMappingURL=extensionDefaultVisitor.js.map