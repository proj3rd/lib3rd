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
var logging_1 = require("../../utils/logging");
var utils_1 = require("../utils");
var extensionMarker_1 = require("../classes/extensionMarker");
var extensionAdditions_1 = require("./extensionAdditions");
var extensionAndException_1 = require("./extensionAndException");
var optionalExtensionMarker_1 = require("./optionalExtensionMarker");
var rootComponentTypeList_1 = require("./rootComponentTypeList");
var tag_1 = require("./tag");
/**
 * ANTRL4 grammar
 * ```
 *  componentTypeLists :
 *     rootComponentTypeList (tag | (COMMA tag? extensionAndException  extensionAdditions (tag | (COMMA tag? ELLIPSIS  (COMMA  rootComponentTypeList tag?)?))?))?
 *    |  extensionAndException  extensionAdditions (tag | (COMMA tag? ELLIPSIS  (COMMA    rootComponentTypeList tag?)?))?
 * ```
 */
var ComponentTypeListsVisitor = /** @class */ (function (_super) {
    __extends(ComponentTypeListsVisitor, _super);
    function ComponentTypeListsVisitor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ComponentTypeListsVisitor.prototype.defaultResult = function () {
        return [];
    };
    ComponentTypeListsVisitor.prototype.visitChildren = function (componentTypeListsCtx) {
        var childCtxes = componentTypeListsCtx.children;
        var componentTypeLists = [];
        childCtxes.forEach(function (childCtx) {
            switch (utils_1.getContextName(childCtx)) {
                case 'rootComponentTypeList': {
                    componentTypeLists.splice.apply(componentTypeLists, [componentTypeLists.length, 0].concat(childCtx.accept(new rootComponentTypeList_1.RootComponentTypeListVisitor())));
                    break;
                }
                case 'tag': {
                    var tag = childCtx.accept(new tag_1.TagVisitor());
                    componentTypeLists[componentTypeLists.length - 1].tag = tag;
                    break;
                }
                case 'extensionAndException': {
                    componentTypeLists.splice.apply(componentTypeLists, [componentTypeLists.length, 0].concat(childCtx.accept(new extensionAndException_1.ExtensionAndExceptionVisitor())));
                    break;
                }
                case 'extensionAdditions': {
                    componentTypeLists.splice.apply(componentTypeLists, [componentTypeLists.length, 0].concat(childCtx.accept(new extensionAdditions_1.ExtensionAdditionsVisitor())));
                    break;
                }
                case 'optionalExtensionMarker': {
                    componentTypeLists.splice.apply(componentTypeLists, [componentTypeLists.length, 0].concat(childCtx.accept(new optionalExtensionMarker_1.OptionalExtensionMarkerVisitor())));
                    break;
                }
                default: {
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
                    break;
                }
            }
        });
        return componentTypeLists;
    };
    return ComponentTypeListsVisitor;
}(AbstractParseTreeVisitor_1.AbstractParseTreeVisitor));
exports.ComponentTypeListsVisitor = ComponentTypeListsVisitor;
