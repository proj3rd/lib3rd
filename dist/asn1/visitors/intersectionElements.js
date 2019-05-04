"use strict";
exports.__esModule = true;
var logging_1 = require("../../utils/logging");
var utils_1 = require("../utils");
var elements_1 = require("./elements");
/**
 * ANTLR4 grammar
 * ```
 * intersectionElements : elements (exclusions)?
 * ```
 */
var IntersectionElementsVisitor = /** @class */ (function () {
    function IntersectionElementsVisitor() {
    }
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
}());
exports.IntersectionElementsVisitor = IntersectionElementsVisitor;
