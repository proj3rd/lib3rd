"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
var logging_1 = require("../../utils/logging");
var utils_1 = require("../utils");
var extensionMarker_1 = require("../classes/extensionMarker");
/**
 * ANTLR4 grammar
 * ```
 * extensionAndException :  ELLIPSIS  exceptionSpec?
 * ```
 */
var ExtensionAndExceptionVisitor = /** @class */ (function (_super) {
    __extends(ExtensionAndExceptionVisitor, _super);
    function ExtensionAndExceptionVisitor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ExtensionAndExceptionVisitor.prototype.defaultResult = function () {
        return [];
    };
    ExtensionAndExceptionVisitor.prototype.visitChildren = function (extensionAndExceptionCtx) {
        var extensionAndException = [new extensionMarker_1.ExtensionMarker()];
        var exceptionSpecCtx = extensionAndExceptionCtx.children[1];
        if (exceptionSpecCtx) {
            logging_1.log.warn(utils_1.getLogWithAsn1(extensionAndExceptionCtx, 'ExceptionSpec not supported:'));
        }
        return extensionAndException;
    };
    return ExtensionAndExceptionVisitor;
}(AbstractParseTreeVisitor_1.AbstractParseTreeVisitor));
exports.ExtensionAndExceptionVisitor = ExtensionAndExceptionVisitor;
