"use strict";
exports.__esModule = true;
var logging_1 = require("../../utils/logging");
var utils_1 = require("../utils");
var extensionMarker_1 = require("../classes/extensionMarker");
/**
 * ANTLR4 grammar
 * ```
 * extensionAndException :  ELLIPSIS  exceptionSpec?
 * ```
 */
var ExtensionAndExceptionVisitor = /** @class */ (function () {
    function ExtensionAndExceptionVisitor() {
    }
    ExtensionAndExceptionVisitor.prototype.visitChildren = function (extensionAndExceptionCtx) {
        var extensionAndException = [new extensionMarker_1.ExtensionMarker()];
        var exceptionSpecCtx = extensionAndExceptionCtx.children[1];
        if (exceptionSpecCtx) {
            logging_1.log.warn(utils_1.getLogWithAsn1(extensionAndExceptionCtx, 'ExceptionSpec not supported:'));
        }
        return extensionAndException;
    };
    return ExtensionAndExceptionVisitor;
}());
exports.ExtensionAndExceptionVisitor = ExtensionAndExceptionVisitor;
