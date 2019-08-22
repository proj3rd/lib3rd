"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const extensionAdditionAlternatives_1 = require("./extensionAdditionAlternatives");
const extensionAndException_1 = require("./extensionAndException");
const optionalExtensionMarker_1 = require("./optionalExtensionMarker");
const rootAlternativeTypeList_1 = require("./rootAlternativeTypeList");
/**
 * ANTLR4 grammar
 * ```
 * alternativeTypeLists :   rootAlternativeTypeList (COMMA
 *    extensionAndException  extensionAdditionAlternatives  optionalExtensionMarker )?
 * ```
 */
class AlternativeTypeListsVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    defaultResult() {
        return undefined;
    }
    visitChildren(alternativeTypeListsCtx) {
        const childCtxes = alternativeTypeListsCtx.children;
        const rootAlternativeTypeListCtx = childCtxes[0];
        const extensionAndExceptionCtx = childCtxes[2];
        const extensionAdditionAlternativesCtx = childCtxes[3];
        const optionalExtensionMarkerCtx = childCtxes[4];
        const alternativeTypeList = rootAlternativeTypeListCtx.accept(new rootAlternativeTypeList_1.RootAlternativeTypeListVisitor());
        if (extensionAndExceptionCtx) {
            alternativeTypeList.splice(alternativeTypeList.length, 0, ...extensionAndExceptionCtx.accept(new extensionAndException_1.ExtensionAndExceptionVisitor()));
        }
        if (extensionAdditionAlternativesCtx) {
            const extensionAdditionAlternatives = extensionAdditionAlternativesCtx.accept(new extensionAdditionAlternatives_1.ExtensionAdditionAlternativesVisitor());
            alternativeTypeList.splice(alternativeTypeList.length, 0, ...extensionAdditionAlternatives);
        }
        if (optionalExtensionMarkerCtx) {
            const optionalExtensionMarker = optionalExtensionMarkerCtx.accept(new optionalExtensionMarker_1.OptionalExtensionMarkerVisitor());
            alternativeTypeList.splice(alternativeTypeList.length, 0, ...optionalExtensionMarker);
        }
        return alternativeTypeList;
    }
}
exports.AlternativeTypeListsVisitor = AlternativeTypeListsVisitor;
