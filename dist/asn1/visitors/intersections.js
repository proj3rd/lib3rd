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
var intersectionElements_1 = require("./intersectionElements");
/**
 * ANTLR4 grammar
 * ```
 * intersections : (intersectionElements) (intersectionMark intersectionElements)*
 * ```
 */
var IntersectionsVisitor = /** @class */ (function (_super) {
    __extends(IntersectionsVisitor, _super);
    function IntersectionsVisitor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    IntersectionsVisitor.prototype.defaultResult = function () {
        return undefined;
    };
    IntersectionsVisitor.prototype.visitChildren = function (intersectionsCtx) {
        var childCtxes = intersectionsCtx.children;
        var intersections;
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
}(AbstractParseTreeVisitor_1.AbstractParseTreeVisitor));
exports.IntersectionsVisitor = IntersectionsVisitor;
