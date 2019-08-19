"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var logging_1 = require("../../utils/logging");
var utils_1 = require("../utils");
var intersectionElements_1 = require("./intersectionElements");
/**
 * ANTLR4 grammar
 * ```
 * intersections : (intersectionElements) (intersectionMark intersectionElements)*
 * ```
 */
var IntersectionsVisitor = /** @class */ (function () {
    function IntersectionsVisitor() {
    }
    IntersectionsVisitor.prototype.visitChildren = function (intersectionsCtx) {
        var childCtxes = intersectionsCtx.children;
        var intersections = null;
        if (childCtxes.length === 1) {
            intersections = childCtxes[0].accept(new intersectionElements_1.IntersectionElementsVisitor());
        }
        else if (childCtxes.length > 1) {
            // TODO
            logging_1.log.warn(utils_1.getLogWithAsn1(intersectionsCtx, 'Multiple IntersectionElements\'s not supported:'));
        }
        return intersections;
    };
    return IntersectionsVisitor;
}());
exports.IntersectionsVisitor = IntersectionsVisitor;
