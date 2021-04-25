"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SequenceTypeVisitor = void 0;
/* eslint-disable class-methods-use-this */
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const sequenceType_1 = require("../classes/sequenceType");
const componentTypeListsVisitor_1 = require("./componentTypeListsVisitor");
const extensionAndExceptionVisitor_1 = require("./extensionAndExceptionVisitor");
const optionalExtensionMarkerVisitor_1 = require("./optionalExtensionMarkerVisitor");
/**
 * # Grammar
 * ```
 * sequenceType: SEQUENCE_LITERAL L_BRACE
 *   (extensionAndException  optionalExtensionMarker | componentTypeLists)?
 *   R_BRACE
 * ```
 */
class SequenceTypeVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    visitChildren(ctx) {
        const componentTypes = [];
        const extensionAndExceptionCtx = ctx.extensionAndException();
        if (extensionAndExceptionCtx !== undefined) {
            const extensionAndException = extensionAndExceptionCtx.accept(new extensionAndExceptionVisitor_1.ExtensionAndExceptionVisitor());
            componentTypes.push(extensionAndException);
        }
        const optionalExtensionMarkerCtx = ctx.optionalExtensionMarker();
        if (optionalExtensionMarkerCtx !== undefined) {
            const optionalExtensionMarker = optionalExtensionMarkerCtx.accept(new optionalExtensionMarkerVisitor_1.OptionalExtensionMarkerVisitor());
            if (optionalExtensionMarker !== undefined) {
                componentTypes.push(optionalExtensionMarker);
            }
        }
        const componentTypeListsCtx = ctx.componentTypeLists();
        if (componentTypeListsCtx !== undefined) {
            componentTypes.push(...componentTypeListsCtx.accept(new componentTypeListsVisitor_1.ComponentTypeListsVisitor()));
        }
        return new sequenceType_1.SequenceType(componentTypes);
    }
    defaultResult() {
        return new sequenceType_1.SequenceType([]);
    }
}
exports.SequenceTypeVisitor = SequenceTypeVisitor;
//# sourceMappingURL=sequenceTypeVisitor.js.map