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
var elements_1 = require("./elements");
/**
 * ANTLR4 grammar
 * ```
 * intersectionElements : elements (exclusions)?
 * ```
 */
var IntersectionElementsVisitor = /** @class */ (function (_super) {
    __extends(IntersectionElementsVisitor, _super);
    function IntersectionElementsVisitor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    IntersectionElementsVisitor.prototype.defaultResult = function () {
        return undefined;
    };
    IntersectionElementsVisitor.prototype.visitChildren = function (intersectionElementsCtx) {
        var childCtxes = intersectionElementsCtx.children;
        var elementsCtx = childCtxes[0];
        var exclusionsCtx = childCtxes[1];
        var intersectionElements = elementsCtx.accept(new elements_1.ElementsVisitor());
        if (exclusionsCtx) {
            logging_1.log.warn(utils_1.getLogWithAsn1(intersectionElementsCtx, 'Exclusions not supported:'));
        }
        return intersectionElements;
    };
    return IntersectionElementsVisitor;
}(AbstractParseTreeVisitor_1.AbstractParseTreeVisitor));
exports.IntersectionElementsVisitor = IntersectionElementsVisitor;
