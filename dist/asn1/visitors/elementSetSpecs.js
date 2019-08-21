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
var rootElementSetSpec_1 = require("./rootElementSetSpec");
/**
 * ANTLR4 grammar
 * ```
 * elementSetSpecs :
 *  rootElementSetSpec (COMMA ELLIPSIS (COMMA additionalElementSetSpec)?)?
 * ```
 */
var ElementSetSpecsVisitor = /** @class */ (function (_super) {
    __extends(ElementSetSpecsVisitor, _super);
    function ElementSetSpecsVisitor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ElementSetSpecsVisitor.prototype.defaultResult = function () {
        return undefined;
    };
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
}(AbstractParseTreeVisitor_1.AbstractParseTreeVisitor));
exports.ElementSetSpecsVisitor = ElementSetSpecsVisitor;
