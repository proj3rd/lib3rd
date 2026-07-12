"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExtensionAndExceptionVisitor = void 0;
/* eslint-disable class-methods-use-this */
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const unimpl_1 = require("../../utils/unimpl");
const extensionMarker_1 = require("../classes/extensionMarker");
/**
 * # Grammar
 * ```
 * extensionAndException: ELLIPSIS exceptionSpec?
 * ```
 */
class ExtensionAndExceptionVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    visitChildren(ctx) {
        const exceptionSpecCtx = ctx.exceptionSpec();
        if (exceptionSpecCtx !== undefined) {
            unimpl_1.unimpl(ctx.text);
        }
        return extensionMarker_1.ExtensionMarker.getInstance();
    }
    defaultResult() {
        return unimpl_1.unimpl();
    }
}
exports.ExtensionAndExceptionVisitor = ExtensionAndExceptionVisitor;
//# sourceMappingURL=extensionAndExceptionVisitor.js.map