"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlternativeTypeListsVisitor = void 0;
/* eslint-disable class-methods-use-this */
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const grammar3rdParser_1 = require("../grammar/grammar3rdParser");
const extensionAdditionAlternativesVisitor_1 = require("./extensionAdditionAlternativesVisitor");
const extensionAndExceptionVisitor_1 = require("./extensionAndExceptionVisitor");
const optionalExtensionMarkerVisitor_1 = require("./optionalExtensionMarkerVisitor");
const rootAlternativeTypeList_1 = require("./rootAlternativeTypeList");
/**
 * # Grammar
 * ```
 * alternativeTypeLists: rootAlternativeTypeList
 *   (COMMA extensionAndException extensionAdditionAlternatives optionalExtensionMarker)?
 * ```
 */
class AlternativeTypeListsVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    visitChildren(ctx) {
        const rootComponents = [];
        for (let i = 0; i < ctx.childCount; i += 1) {
            const childCtx = ctx.getChild(i);
            if (childCtx instanceof grammar3rdParser_1.RootAlternativeTypeListContext) {
                rootComponents.push(...childCtx.accept(new rootAlternativeTypeList_1.RootAlternativeTypeListVisitor()));
            }
            else if (childCtx instanceof grammar3rdParser_1.ExtensionAndExceptionContext) {
                const extensionAndException = childCtx.accept(new extensionAndExceptionVisitor_1.ExtensionAndExceptionVisitor());
                rootComponents.push(extensionAndException);
            }
            else if (childCtx instanceof grammar3rdParser_1.ExtensionAdditionAlternativesContext) {
                const extensionAdditionAlternatives = childCtx.accept(new extensionAdditionAlternativesVisitor_1.ExtensionAdditionAlternativesVisitor());
                rootComponents.push(...extensionAdditionAlternatives);
            }
            else if (childCtx instanceof grammar3rdParser_1.OptionalExtensionMarkerContext) {
                const optionalExtensionMarker = childCtx.accept(new optionalExtensionMarkerVisitor_1.OptionalExtensionMarkerVisitor());
                if (optionalExtensionMarker !== undefined) {
                    rootComponents.push(optionalExtensionMarker);
                }
            }
        }
        return rootComponents;
    }
    defaultResult() {
        return [];
    }
}
exports.AlternativeTypeListsVisitor = AlternativeTypeListsVisitor;
//# sourceMappingURL=alternativeTypeListsVisitor.js.map