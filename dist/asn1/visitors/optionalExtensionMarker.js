"use strict";
exports.__esModule = true;
var extensionMarker_1 = require("../classes/extensionMarker");
/**
 * ANTLR4 grammar
 * ```
 * optionalExtensionMarker :  ( COMMA  ELLIPSIS )?
 * ```
 */
var OptionalExtensionMarkerVisitor = /** @class */ (function () {
    function OptionalExtensionMarkerVisitor() {
    }
    OptionalExtensionMarkerVisitor.prototype.visitChildren = function (optionalExtensionMarkerCtx) {
        return optionalExtensionMarkerCtx.children ? [new extensionMarker_1.ExtensionMarker()] : [];
    };
    return OptionalExtensionMarkerVisitor;
}());
exports.OptionalExtensionMarkerVisitor = OptionalExtensionMarkerVisitor;
