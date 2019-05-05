"use strict";
exports.__esModule = true;
var logging_1 = require("../../utils/logging");
var utils_1 = require("../utils");
var componentType_1 = require("./componentType");
var extensionAdditionGroup_1 = require("./extensionAdditionGroup");
/**
 * ANTLR4 grammar
 * ```
 * extensionAddition  : componentType  |  extensionAdditionGroup
 * ```
 */
var ExtensionAdditionVisitor = /** @class */ (function () {
    function ExtensionAdditionVisitor() {
    }
    ExtensionAdditionVisitor.prototype.visitChildren = function (extensionAdditionCtx) {
        var childCtx = extensionAdditionCtx.children[0];
        var extensionAddition = null;
        switch (utils_1.getContextName(childCtx)) {
            case 'componentType': {
                extensionAddition = childCtx.accept(new componentType_1.ComponentTypeVisitor());
                break;
            }
            case 'extensionAdditionGroup': {
                extensionAddition = childCtx.accept(new extensionAdditionGroup_1.ExtensionAdditionGroupVisitor());
                break;
            }
            default: {
                logging_1.log.warn(utils_1.getLogWithAsn1(extensionAdditionCtx, 'Not supported ASN1:'));
                break;
            }
        }
        return extensionAddition;
    };
    return ExtensionAdditionVisitor;
}());
exports.ExtensionAdditionVisitor = ExtensionAdditionVisitor;
