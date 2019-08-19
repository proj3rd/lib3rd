"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var logging_1 = require("../../utils/logging");
var utils_1 = require("../utils");
var rootElementSetSpec_1 = require("./rootElementSetSpec");
/**
 * ANTLR4 grammar
 * ```
 * elementSetSpecs :
 *  rootElementSetSpec (COMMA ELLIPSIS (COMMA additionalElementSetSpec)?)?
 * ```
 */
var ElementSetSpecsVisitor = /** @class */ (function () {
    function ElementSetSpecsVisitor() {
    }
    ElementSetSpecsVisitor.prototype.visitChildren = function (elementSetSpecsCtx) {
        var childCtxes = elementSetSpecsCtx.children;
        var rootElementSetSpecCtx = childCtxes[0];
        var elementSetSpecs = rootElementSetSpecCtx.accept(new rootElementSetSpec_1.RootElementSetSpecVisitor());
        if (childCtxes.length > 3) {
            logging_1.log.warn(utils_1.getLogWithAsn1(elementSetSpecsCtx, 'AdditionalElementSetSpec not supported:'));
        }
        else if (childCtxes.length > 1) {
            logging_1.log.warn(utils_1.getLogWithAsn1(elementSetSpecsCtx, 'Extension marker not supported:'));
        }
        return elementSetSpecs;
    };
    return ElementSetSpecsVisitor;
}());
exports.ElementSetSpecsVisitor = ElementSetSpecsVisitor;
