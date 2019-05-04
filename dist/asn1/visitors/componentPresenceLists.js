"use strict";
exports.__esModule = true;
var logging_1 = require("../../utils/logging");
var utils_1 = require("../utils");
var extensionMarker_1 = require("../classes/extensionMarker");
var componentPresenceList_1 = require("./componentPresenceList");
/**
 * ANTLR4 grammar
 * ```
 * componentPresenceLists:
 *    componentPresenceList? (COMMA ELLIPSIS (COMMA componentPresenceList)?)?
 *   |  ELLIPSIS (COMMA componentPresenceList)?
 * ```
 */
var ComponentPresenceListsVisitor = /** @class */ (function () {
    function ComponentPresenceListsVisitor() {
    }
    ComponentPresenceListsVisitor.prototype.visitChildren = function (componentPresenceListsCtx) {
        var componentPresenceLists = null;
        var childCtxes = componentPresenceListsCtx.children;
        childCtxes.forEach(function (childCtx, index) {
            switch (utils_1.getContextName(childCtx)) {
                case 'componentPresenceList': {
                    var componentPresenceList = childCtx.accept(new componentPresenceList_1.ComponentPresenceListVisitor());
                    if (componentPresenceLists === null) {
                        componentPresenceLists = componentPresenceList;
                    }
                    else {
                        componentPresenceLists.splice.apply(componentPresenceLists, [componentPresenceLists.length, 0].concat(componentPresenceList));
                    }
                    break;
                }
                case null: {
                    switch (childCtx.getText()) {
                        case ',': {
                            break;
                        }
                        case '...': {
                            var extensionMarker = new extensionMarker_1.ExtensionMarker();
                            if (componentPresenceLists === null) {
                                componentPresenceLists = [extensionMarker];
                            }
                            else {
                                componentPresenceLists.push(extensionMarker);
                            }
                            break;
                        }
                        default: {
                            logging_1.log.warn(utils_1.getLogWithAsn1(componentPresenceListsCtx, 'Not supported ASN1:'));
                            break;
                        }
                    }
                    break;
                }
                default: {
                    logging_1.log.warn(utils_1.getLogWithAsn1(componentPresenceListsCtx, 'Not supported ASN1:'));
                    break;
                }
            }
        });
        return componentPresenceLists;
    };
    return ComponentPresenceListsVisitor;
}());
exports.ComponentPresenceListsVisitor = ComponentPresenceListsVisitor;
