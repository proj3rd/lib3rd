"use strict";
exports.__esModule = true;
var utils_1 = require("../utils");
var extensionAdditionAlternativesGroup_1 = require("./extensionAdditionAlternativesGroup");
var namedType_1 = require("./namedType");
/**
 * ANTR4 grammar
 * ```
 * extensionAdditionAlternative  :  extensionAdditionAlternativesGroup | namedType
 * ```
 */
var ExtensionAdditionAlternativeVisitor = /** @class */ (function () {
    function ExtensionAdditionAlternativeVisitor() {
    }
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
                break;
            }
        }
        return extensionAdditionAlternative;
    };
    return ExtensionAdditionAlternativeVisitor;
}());
exports.ExtensionAdditionAlternativeVisitor = ExtensionAdditionAlternativeVisitor;
