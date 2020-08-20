"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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