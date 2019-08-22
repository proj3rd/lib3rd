"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const extensionMarker_1 = require("../classes/extensionMarker");
/**
 * ANTLR4 grammar
 * ```
 * optionalExtensionMarker :  ( COMMA  ELLIPSIS )?
 * ```
 */
class OptionalExtensionMarkerVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    defaultResult() {
        return [];
    }
    visitChildren(optionalExtensionMarkerCtx) {
        return optionalExtensionMarkerCtx.children ? [new extensionMarker_1.ExtensionMarker()] : [];
    }
}
exports.OptionalExtensionMarkerVisitor = OptionalExtensionMarkerVisitor;
