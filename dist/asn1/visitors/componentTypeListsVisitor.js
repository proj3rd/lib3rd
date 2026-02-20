"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComponentTypeListsVisitor = void 0;
/* eslint-disable class-methods-use-this */
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const componentType_1 = require("../classes/componentType");
const extensionMarker_1 = require("../classes/extensionMarker");
const grammar3rdParser_1 = require("../grammar/grammar3rdParser");
const extensionAdditionsVisitor_1 = require("./extensionAdditionsVisitor");
const extensionAndExceptionVisitor_1 = require("./extensionAndExceptionVisitor");
const optionalExtensionMarkerVisitor_1 = require("./optionalExtensionMarkerVisitor");
const rootComponentTypeListVisitor_1 = require("./rootComponentTypeListVisitor");
const tagVisitor_1 = require("./tagVisitor");
/**
 * # Grammar
 * ```
 * componentTypeLists :
 *     // RootComponentTypeList
 *     rootComponentTypeList tag?
 *     // | RootComponentTypeList "," ExtensionAndException ExtensionAdditions
 *            OptionalExtensionMarker
 *     // | RootComponentTypeList "," ExtensionAndException ExtensionAdditions
 *            ExtensionEndMarker "," RootComponentTypeList
 *   | rootComponentTypeList COMMA tag? extensionAndException extensionAdditions tag?
 *   | rootComponentTypeList COMMA tag? extensionAndException extensionAdditions
 *       (COMMA tag? ELLIPSIS (COMMA rootComponentTypeList tag?)?)?
 *     // | ExtensionAndException ExtensionAdditions ExtensionEndMarker "," RootComponentTypeList
 *     // | ExtensionAndException ExtensionAdditions OptionalExtensionMarker
 *   | extensionAndException extensionAdditions tag?
 *   | extensionAndException extensionAdditions
 *       (COMMA tag? ELLIPSIS (COMMA rootComponentTypeList tag?))?
 * ```
 */
class ComponentTypeListsVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    visitChildren(ctx) {
        const rootSequenceComponents = [];
        const { childCount } = ctx;
        for (let i = 0; i < childCount; i += 1) {
            const childCtx = ctx.getChild(i);
            if (childCtx instanceof grammar3rdParser_1.RootComponentTypeListContext) {
                rootSequenceComponents.push(...childCtx.accept(new rootComponentTypeListVisitor_1.RootComponentTypeListVisitor()));
            }
            else if (childCtx instanceof grammar3rdParser_1.TagContext) {
                const tag = childCtx.accept(new tagVisitor_1.TagVisitor());
                const { length } = rootSequenceComponents;
                const lastComponent = rootSequenceComponents[length - 1];
                if (lastComponent instanceof componentType_1.ComponentType) {
                    lastComponent.tag = tag;
                }
                else {
                    throw Error();
                }
            }
            else if (childCtx instanceof grammar3rdParser_1.ExtensionAndExceptionContext) {
                const extensionAndException = childCtx.accept(new extensionAndExceptionVisitor_1.ExtensionAndExceptionVisitor());
                rootSequenceComponents.push(extensionAndException);
            }
            else if (childCtx instanceof grammar3rdParser_1.ExtensionAdditionsContext) {
                const extensionAdditions = childCtx.accept(new extensionAdditionsVisitor_1.ExtensionAdditionsVisitor());
                rootSequenceComponents.push(...extensionAdditions);
            }
            else if (childCtx instanceof grammar3rdParser_1.OptionalExtensionMarkerContext) {
                const optionalExtensionMarker = childCtx.accept(new optionalExtensionMarkerVisitor_1.OptionalExtensionMarkerVisitor());
                if (optionalExtensionMarker !== undefined) {
                    rootSequenceComponents.push(optionalExtensionMarker);
                }
            }
            else {
                switch (childCtx.text) {
                    case ',...': {
                        rootSequenceComponents.push(extensionMarker_1.ExtensionMarker.getInstance());
                        break;
                    }
                    case ',': {
                        break;
                    }
                    default: {
                        throw Error(childCtx.text);
                    }
                }
            }
        }
        return rootSequenceComponents;
    }
    defaultResult() {
        return [];
    }
}
exports.ComponentTypeListsVisitor = ComponentTypeListsVisitor;
//# sourceMappingURL=componentTypeListsVisitor.js.map