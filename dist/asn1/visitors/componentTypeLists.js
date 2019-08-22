"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const logging_1 = require("../../utils/logging");
const utils_1 = require("../utils");
const ASN_3gppParser_1 = require("../ASN_3gppParser");
const extensionMarker_1 = require("../classes/extensionMarker");
const extensionAdditions_1 = require("./extensionAdditions");
const extensionAndException_1 = require("./extensionAndException");
const optionalExtensionMarker_1 = require("./optionalExtensionMarker");
const rootComponentTypeList_1 = require("./rootComponentTypeList");
const tag_1 = require("./tag");
/**
 * ANTRL4 grammar
 * ```
 *  componentTypeLists :
 *     rootComponentTypeList (tag | (COMMA tag? extensionAndException  extensionAdditions (tag | (COMMA tag? ELLIPSIS  (COMMA  rootComponentTypeList tag?)?))?))?
 *    |  extensionAndException  extensionAdditions (tag | (COMMA tag? ELLIPSIS  (COMMA    rootComponentTypeList tag?)?))?
 * ```
 */
class ComponentTypeListsVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    defaultResult() {
        return [];
    }
    visitChildren(componentTypeListsCtx) {
        const childCtxes = componentTypeListsCtx.children;
        const componentTypeLists = [];
        childCtxes.forEach((childCtx) => {
            if (childCtx instanceof ASN_3gppParser_1.RootComponentTypeListContext) {
                componentTypeLists.splice(componentTypeLists.length, 0, ...childCtx.accept(new rootComponentTypeList_1.RootComponentTypeListVisitor()));
            }
            else if (childCtx instanceof ASN_3gppParser_1.TagContext) {
                const tag = childCtx.accept(new tag_1.TagVisitor());
                componentTypeLists[componentTypeLists.length - 1].tag = tag;
            }
            else if (childCtx instanceof ASN_3gppParser_1.ExtensionAndExceptionContext) {
                componentTypeLists.splice(componentTypeLists.length, 0, ...childCtx.accept(new extensionAndException_1.ExtensionAndExceptionVisitor()));
            }
            else if (childCtx instanceof ASN_3gppParser_1.ExtensionAdditionsContext) {
                componentTypeLists.splice(componentTypeLists.length, 0, ...childCtx.accept(new extensionAdditions_1.ExtensionAdditionsVisitor()));
            }
            else if (childCtx instanceof ASN_3gppParser_1.OptionalExtensionMarkerContext) {
                componentTypeLists.splice(componentTypeLists.length, 0, ...childCtx.accept(new optionalExtensionMarker_1.OptionalExtensionMarkerVisitor()));
            }
            else {
                // COMMA or EXTENSIONENDMARKER
                switch (childCtx.text) {
                    case ', ...': {
                        componentTypeLists.push(new extensionMarker_1.ExtensionMarker());
                        break;
                    }
                    case ',': {
                        break;
                    }
                    default: {
                        logging_1.log.warn(utils_1.getLogWithAsn1(childCtx, 'Not supported ASN1:'));
                        break;
                    }
                }
            }
        });
        return componentTypeLists;
    }
}
exports.ComponentTypeListsVisitor = ComponentTypeListsVisitor;
