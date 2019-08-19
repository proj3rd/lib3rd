"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
var AlternativeTypeListsVisitor = /** @class */ (function () {
    function AlternativeTypeListsVisitor() {
    }
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
}());
exports.AlternativeTypeListsVisitor = AlternativeTypeListsVisitor;
