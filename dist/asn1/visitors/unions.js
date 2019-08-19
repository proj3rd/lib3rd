"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var logging_1 = require("../../utils/logging");
var utils_1 = require("../utils");
var intersections_1 = require("./intersections");
/**
 * ANTLR4 grammar
 * ```
 * unions :   (intersections) (unionMark intersections)*
 * ```
 */
var UnionsVisitor = /** @class */ (function () {
    function UnionsVisitor() {
    }
    UnionsVisitor.prototype.visitChildren = function (unionsCtx) {
        var childCtxes = unionsCtx.children;
        var unions = null;
        if (childCtxes.length === 1) {
            unions = childCtxes[0].accept(new intersections_1.IntersectionsVisitor());
        }
        else {
            logging_1.log.warn(utils_1.getLogWithAsn1(unionsCtx, 'Multiple of Intersections\'s not supported:'));
        }
        return unions;
    };
    return UnionsVisitor;
}());
exports.UnionsVisitor = UnionsVisitor;
