"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const extensionAdditionAlternativesGroup_1 = require("../classes/extensionAdditionAlternativesGroup");
const alternativeTypeList_1 = require("./alternativeTypeList");
const versionNumber_1 = require("./versionNumber");
/**
 * ANTLR4 grammar
 * ```
 * extensionAdditionAlternativesGroup  :  DOUBLE_L_BRACKET  versionNumber  alternativeTypeList  DOUBLE_R_BRACKET
 * ```
 */
class ExtensionAdditionAlternativesGroupVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    defaultResult() {
        return undefined;
    }
    visitChildren(extensionAdditionAlternativesGroupCtx) {
        const childCtxes = extensionAdditionAlternativesGroupCtx.children;
        const versionNumberCtx = childCtxes[1];
        const alternativeTypeListCtx = childCtxes[2];
        const versionNumber = versionNumberCtx.accept(new versionNumber_1.VersionNumberVisitor());
        const alternativeTypeList = alternativeTypeListCtx.accept(new alternativeTypeList_1.AlternativeTypeListVisitor());
        return new extensionAdditionAlternativesGroup_1.ExtensionAdditionAlternativesGroup(alternativeTypeList, versionNumber);
    }
}
exports.ExtensionAdditionAlternativesGroupVisitor = ExtensionAdditionAlternativesGroupVisitor;
