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
var intersections_1 = require("./intersections");
/**
 * ANTLR4 grammar
 * ```
 * unions :   (intersections) (unionMark intersections)*
 * ```
 */
var UnionsVisitor = /** @class */ (function (_super) {
    __extends(UnionsVisitor, _super);
    function UnionsVisitor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UnionsVisitor.prototype.defaultResult = function () {
        return undefined;
    };
    UnionsVisitor.prototype.visitChildren = function (unionsCtx) {
        var childCtxes = unionsCtx.children;
        var unions;
        if (childCtxes.length === 1) {
            unions = childCtxes[0].accept(new intersections_1.IntersectionsVisitor());
        }
        else {
            logging_1.log.warn(utils_1.getLogWithAsn1(unionsCtx, 'Multiple of Intersections\'s not supported:'));
        }
        return unions;
    };
    return UnionsVisitor;
}(AbstractParseTreeVisitor_1.AbstractParseTreeVisitor));
exports.UnionsVisitor = UnionsVisitor;
