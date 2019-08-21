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
var extensionAdditionAlternativesGroup_1 = require("./extensionAdditionAlternativesGroup");
var namedType_1 = require("./namedType");
/**
 * ANTR4 grammar
 * ```
 * extensionAdditionAlternative  :  extensionAdditionAlternativesGroup | namedType
 * ```
 */
var ExtensionAdditionAlternativeVisitor = /** @class */ (function (_super) {
    __extends(ExtensionAdditionAlternativeVisitor, _super);
    function ExtensionAdditionAlternativeVisitor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ExtensionAdditionAlternativeVisitor.prototype.defaultResult = function () {
        return undefined;
    };
    ExtensionAdditionAlternativeVisitor.prototype.visitChildren = function (extensionAdditionAlternativeCtx) {
        var extensionAdditionAlternative = null;
        var childCtx = extensionAdditionAlternativeCtx.children[0];
        switch (utils_1.getContextName(childCtx)) {
            case 'extensionAdditionAlternativesGroup': {
                extensionAdditionAlternative = childCtx.accept(new extensionAdditionAlternativesGroup_1.ExtensionAdditionAlternativesGroupVisitor());
                break;
            }
            case 'namedType': {
                extensionAdditionAlternative = childCtx.accept(new namedType_1.NamedTypeVisitor());
                break;
            }
            default: {
                logging_1.log.warn(utils_1.getLogWithAsn1(extensionAdditionAlternativeCtx, 'Not supported ASN1:'));
                break;
            }
        }
        return extensionAdditionAlternative;
    };
    return ExtensionAdditionAlternativeVisitor;
}(AbstractParseTreeVisitor_1.AbstractParseTreeVisitor));
exports.ExtensionAdditionAlternativeVisitor = ExtensionAdditionAlternativeVisitor;
