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
var extensionAdditionAlternatives_1 = require("./extensionAdditionAlternatives");
var extensionAndException_1 = require("./extensionAndException");
var optionalExtensionMarker_1 = require("./optionalExtensionMarker");
var rootAlternativeTypeList_1 = require("./rootAlternativeTypeList");
/**
 * ANTLR4 grammar
 * ```
 * alternativeTypeLists :   rootAlternativeTypeList (COMMA
 *    extensionAndException  extensionAdditionAlternatives  optionalExtensionMarker )?
 * ```
 */
var AlternativeTypeListsVisitor = /** @class */ (function (_super) {
    __extends(AlternativeTypeListsVisitor, _super);
    function AlternativeTypeListsVisitor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AlternativeTypeListsVisitor.prototype.defaultResult = function () {
        return undefined;
    };
    AlternativeTypeListsVisitor.prototype.visitChildren = function (alternativeTypeListsCtx) {
        var childCtxes = alternativeTypeListsCtx.children;
        var rootAlternativeTypeListCtx = childCtxes[0];
        var extensionAndExceptionCtx = childCtxes[2];
        var extensionAdditionAlternativesCtx = childCtxes[3];
        var optionalExtensionMarkerCtx = childCtxes[4];
        var alternativeTypeList = rootAlternativeTypeListCtx.accept(new rootAlternativeTypeList_1.RootAlternativeTypeListVisitor());
        if (extensionAndExceptionCtx) {
            alternativeTypeList.splice.apply(alternativeTypeList, [alternativeTypeList.length, 0].concat(extensionAndExceptionCtx.accept(new extensionAndException_1.ExtensionAndExceptionVisitor())));
        }
        if (extensionAdditionAlternativesCtx) {
            var extensionAdditionAlternatives = extensionAdditionAlternativesCtx.accept(new extensionAdditionAlternatives_1.ExtensionAdditionAlternativesVisitor());
            alternativeTypeList.splice.apply(alternativeTypeList, [alternativeTypeList.length, 0].concat(extensionAdditionAlternatives));
        }
        if (optionalExtensionMarkerCtx) {
            var optionalExtensionMarker = optionalExtensionMarkerCtx.accept(new optionalExtensionMarker_1.OptionalExtensionMarkerVisitor());
            alternativeTypeList.splice.apply(alternativeTypeList, [alternativeTypeList.length, 0].concat(optionalExtensionMarker));
        }
        return alternativeTypeList;
    };
    return AlternativeTypeListsVisitor;
}(AbstractParseTreeVisitor_1.AbstractParseTreeVisitor));
exports.AlternativeTypeListsVisitor = AlternativeTypeListsVisitor;
