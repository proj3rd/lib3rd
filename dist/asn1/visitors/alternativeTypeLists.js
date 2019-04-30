"use strict";
exports.__esModule = true;
var logging_1 = require("../../utils/logging");
var utils_1 = require("../utils");
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
            // TODO
            logging_1.log.warn(utils_1.getLogWithAsn1(alternativeTypeListsCtx, 'ExtensionAndException not supported:'));
        }
        if (extensionAdditionAlternativesCtx) {
            // TODO
            logging_1.log.warn(utils_1.getLogWithAsn1(alternativeTypeListsCtx, 'ExtensionAdditionAlternatives not supported:'));
        }
        if (optionalExtensionMarkerCtx) {
            var optionalExtensionMarker = optionalExtensionMarkerCtx.accept(new optionalExtensionMarker_1.OptionalExtensionMarkerVisitor());
            if (optionalExtensionMarker) {
                alternativeTypeList.push(optionalExtensionMarker);
            }
        }
        return alternativeTypeList;
    };
    return AlternativeTypeListsVisitor;
}());
exports.AlternativeTypeListsVisitor = AlternativeTypeListsVisitor;
