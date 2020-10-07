"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable class-methods-use-this */
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const extensionMarker_1 = require("../classes/extensionMarker");
/**
 * # Grammar
 * ```
 * optionalExtensionMarker: (COMMA ELLIPSIS)?
 * ```
 */
class OptionalExtensionMarkerVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    visitChildren(ctx) {
        if (ctx.childCount === 0) {
            return undefined;
        }
        return extensionMarker_1.ExtensionMarker.getInstance();
    }
    defaultResult() {
        return undefined;
    }
}
exports.OptionalExtensionMarkerVisitor = OptionalExtensionMarkerVisitor;
//# sourceMappingURL=optionalExtensionMarkerVisitor.js.map