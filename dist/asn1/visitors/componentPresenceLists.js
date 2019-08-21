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
var componentPresenceList_1 = require("./componentPresenceList");
/**
 * ANTLR4 grammar
 * ```
 * componentPresenceLists:
 *    componentPresenceList? (COMMA ELLIPSIS (COMMA componentPresenceList)?)?
 *   |  ELLIPSIS (COMMA componentPresenceList)?
 * ```
 */
var ComponentPresenceListsVisitor = /** @class */ (function (_super) {
    __extends(ComponentPresenceListsVisitor, _super);
    function ComponentPresenceListsVisitor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ComponentPresenceListsVisitor.prototype.defaultResult = function () {
        return [];
    };
    ComponentPresenceListsVisitor.prototype.visitChildren = function (componentPresenceListsCtx) {
        var componentPresenceLists = [];
        var childCtxes = componentPresenceListsCtx.children;
        childCtxes.forEach(function (childCtx, index) {
            switch (utils_1.getContextName(childCtx)) {
                case 'componentPresenceList': {
                    var componentPresenceList = childCtx.accept(new componentPresenceList_1.ComponentPresenceListVisitor());
                    componentPresenceLists.splice.apply(componentPresenceLists, [componentPresenceLists.length, 0].concat(componentPresenceList));
                    break;
                }
                case null: {
                    switch (childCtx.text) {
                        case ',': {
                            break;
                        }
                        case '...': {
                            var extensionMarker = new extensionMarker_1.ExtensionMarker();
                            componentPresenceLists.push(extensionMarker);
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
}(AbstractParseTreeVisitor_1.AbstractParseTreeVisitor));
exports.ComponentPresenceListsVisitor = ComponentPresenceListsVisitor;
