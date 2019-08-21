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
var extensionMarker_1 = require("../classes/extensionMarker");
/**
 * ANTLR4 grammar
 * ```
 * optionalExtensionMarker :  ( COMMA  ELLIPSIS )?
 * ```
 */
var OptionalExtensionMarkerVisitor = /** @class */ (function (_super) {
    __extends(OptionalExtensionMarkerVisitor, _super);
    function OptionalExtensionMarkerVisitor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OptionalExtensionMarkerVisitor.prototype.defaultResult = function () {
        return [];
    };
    OptionalExtensionMarkerVisitor.prototype.visitChildren = function (optionalExtensionMarkerCtx) {
        return optionalExtensionMarkerCtx.children ? [new extensionMarker_1.ExtensionMarker()] : [];
    };
    return OptionalExtensionMarkerVisitor;
}(AbstractParseTreeVisitor_1.AbstractParseTreeVisitor));
exports.OptionalExtensionMarkerVisitor = OptionalExtensionMarkerVisitor;
