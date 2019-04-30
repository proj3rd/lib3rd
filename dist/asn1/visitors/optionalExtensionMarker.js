"use strict";
exports.__esModule = true;
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
        return optionalExtensionMarkerCtx.children ? '...' : null;
    };
    return OptionalExtensionMarkerVisitor;
}());
exports.OptionalExtensionMarkerVisitor = OptionalExtensionMarkerVisitor;
