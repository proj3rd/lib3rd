"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExtensionAdditionAlternativesGroupVisitor = void 0;
/* eslint-disable class-methods-use-this */
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const unimpl_1 = require("../../utils/unimpl");
const extensionAdditionAlternativeGroup_1 = require("../classes/extensionAdditionAlternativeGroup");
const alternativeTypeListVisitor_1 = require("./alternativeTypeListVisitor");
const versionNumberVisitor_1 = require("./versionNumberVisitor");
/**
 * # Grammar
 * ```
 * extensionAdditionAlternativesGroup:
 *   DOUBLE_L_BRACKET versionNumber alternativeTypeList DOUBLE_R_BRACKET
 * ```
 */
class ExtensionAdditionAlternativesGroupVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    visitChildren(ctx) {
        const versionNumberCtx = ctx.versionNumber();
        const versionNumber = versionNumberCtx.accept(new versionNumberVisitor_1.VersionNumberVisitor());
        const alternativeTypeListCtx = ctx.alternativeTypeList();
        const alternativeTypeList = alternativeTypeListCtx.accept(new alternativeTypeListVisitor_1.AlternativeTypeListVisitor());
        return new extensionAdditionAlternativeGroup_1.ExtensionAdditionAlternativeGroup(versionNumber, alternativeTypeList);
    }
    defaultResult() {
        return unimpl_1.unimpl();
    }
}
exports.ExtensionAdditionAlternativesGroupVisitor = ExtensionAdditionAlternativesGroupVisitor;
//# sourceMappingURL=extensionAdditionAlternativesGroupVisitor.js.map