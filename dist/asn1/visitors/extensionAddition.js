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
var componentType_1 = require("./componentType");
var extensionAdditionGroup_1 = require("./extensionAdditionGroup");
/**
 * ANTLR4 grammar
 * ```
 * extensionAddition  : componentType  |  extensionAdditionGroup
 * ```
 */
var ExtensionAdditionVisitor = /** @class */ (function (_super) {
    __extends(ExtensionAdditionVisitor, _super);
    function ExtensionAdditionVisitor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ExtensionAdditionVisitor.prototype.defaultResult = function () {
        return undefined;
    };
    ExtensionAdditionVisitor.prototype.visitChildren = function (extensionAdditionCtx) {
        var childCtx = extensionAdditionCtx.children[0];
        var extensionAddition;
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
}(AbstractParseTreeVisitor_1.AbstractParseTreeVisitor));
exports.ExtensionAdditionVisitor = ExtensionAdditionVisitor;
