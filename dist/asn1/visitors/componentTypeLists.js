"use strict";
exports.__esModule = true;
var logging_1 = require("../../utils/logging");
var utils_1 = require("../utils");
var extensionAdditions_1 = require("./extensionAdditions");
var extensionAndException_1 = require("./extensionAndException");
var optionalExtensionMarker_1 = require("./optionalExtensionMarker");
var rootComponentTypeList_1 = require("./rootComponentTypeList");
/**
 * ANTRL4 grammar
 * ```
 *  componentTypeLists :
 *     rootComponentTypeList (COMMA  extensionAndException  extensionAdditions
 *      (optionalExtensionMarker|(EXTENSTIONENDMARKER  COMMA  rootComponentTypeList)))?
 *    |  extensionAndException  extensionAdditions
 *      (optionalExtensionMarker | (EXTENSTIONENDMARKER  COMMA    rootComponentTypeList))
 * ```
 */
var ComponentTypeListsVisitor = /** @class */ (function () {
    function ComponentTypeListsVisitor() {
    }
    ComponentTypeListsVisitor.prototype.visitChildren = function (componentTypeListsCtx) {
        var childCtxes = componentTypeListsCtx.children;
        var componentTypeLists = [];
        switch (utils_1.getContextName(childCtxes[0])) {
            case 'rootComponentTypeList': {
                var rootComponentTypeListCtx = childCtxes[0];
                componentTypeLists = rootComponentTypeListCtx.accept(new rootComponentTypeList_1.RootComponentTypeListVisitor());
                var extensionAndExceptionCtx = childCtxes[2];
                if (extensionAndExceptionCtx) {
                    componentTypeLists.splice.apply(componentTypeLists, [componentTypeLists.length, 0].concat(extensionAndExceptionCtx.accept(new extensionAndException_1.ExtensionAndExceptionVisitor())));
                }
                var extensionAdditionsCtx = childCtxes[3];
                if (extensionAdditionsCtx) {
                    var extensionAdditions = extensionAdditionsCtx.accept(new extensionAdditions_1.ExtensionAdditionsVisitor());
                    componentTypeLists.splice.apply(componentTypeLists, [componentTypeLists.length, 0].concat(extensionAdditions));
                }
                switch (childCtxes.length) {
                    case 1: {
                        break;
                    }
                    case 5: {
                        var optionalExtensionMarkerCtx = childCtxes[4];
                        var optionalExtensionMarker = optionalExtensionMarkerCtx.accept(new optionalExtensionMarker_1.OptionalExtensionMarkerVisitor());
                        componentTypeLists.splice.apply(componentTypeLists, [componentTypeLists.length, 0].concat(optionalExtensionMarker));
                        break;
                    }
                    case 7: {
                        var extendedRootComponentTypeListCtx = childCtxes[6];
                        componentTypeLists.splice.apply(componentTypeLists, [componentTypeLists.length, 0].concat(extendedRootComponentTypeListCtx.accept(new rootComponentTypeList_1.RootComponentTypeListVisitor())));
                        break;
                    }
                    default: {
                        logging_1.log.warn(utils_1.getLogWithAsn1(componentTypeListsCtx, 'Not supported ASN1:'));
                        break;
                    }
                }
                // TODO
                break;
            }
            case 'extensionAndException': {
                var extensionAndExceptionCtx = childCtxes[0];
                componentTypeLists.splice.apply(componentTypeLists, [componentTypeLists.length, 0].concat(extensionAndExceptionCtx.accept(new extensionAndException_1.ExtensionAndExceptionVisitor())));
                var extensionAdditionsCtx = childCtxes[1];
                var extensionAdditions = extensionAdditionsCtx.accept(new extensionAdditions_1.ExtensionAdditionsVisitor());
                componentTypeLists.splice.apply(componentTypeLists, [componentTypeLists.length, 0].concat(extensionAdditions));
                switch (childCtxes.length) {
                    case 3: {
                        var optionalExtensionMarkerCtx = childCtxes[2];
                        var optionalExtensionMarker = optionalExtensionMarkerCtx.accept(new optionalExtensionMarker_1.OptionalExtensionMarkerVisitor());
                        componentTypeLists.splice.apply(componentTypeLists, [componentTypeLists.length, 0].concat(optionalExtensionMarker));
                        break;
                    }
                    case 5: {
                        var extendedRootComponentTypeListCtx = childCtxes[4];
                        componentTypeLists.splice.apply(componentTypeLists, [componentTypeLists.length, 0].concat(extendedRootComponentTypeListCtx.accept(new rootComponentTypeList_1.RootComponentTypeListVisitor())));
                        break;
                    }
                    default: {
                        logging_1.log.warn(utils_1.getLogWithAsn1(componentTypeListsCtx, 'Not supported ASN1:'));
                        break;
                    }
                }
                break;
            }
            default: {
                logging_1.log.warn(utils_1.getLogWithAsn1(componentTypeListsCtx, 'Not supported ASN1:'));
                break;
            }
        }
        return componentTypeLists;
    };
    return ComponentTypeListsVisitor;
}());
exports.ComponentTypeListsVisitor = ComponentTypeListsVisitor;
