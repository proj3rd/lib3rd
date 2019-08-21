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
var constraintSpec_1 = require("./constraintSpec");
/**
 * ANTLR4 grammar
 * ```
 * constraint :L_PARAN constraintSpec  exceptionSpec? R_PARAN
 * ```
 */
var ConstraintVisitor = /** @class */ (function (_super) {
    __extends(ConstraintVisitor, _super);
    function ConstraintVisitor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ConstraintVisitor.prototype.defaultResult = function () {
        return undefined;
    };
    ConstraintVisitor.prototype.visitChildren = function (constraintCtx) {
        var childCtxes = constraintCtx.children;
        var constraintSpecCtx = childCtxes[1];
        var constraint = constraintSpecCtx.accept(new constraintSpec_1.ConstraintSpecVisitor());
        if (utils_1.getContextName(childCtxes[2]) === 'exceptionSpec') {
            logging_1.log.warn(utils_1.getLogWithAsn1(constraintCtx, 'ExceptionSpec not supported:'));
        }
        return constraint;
    };
    return ConstraintVisitor;
}(AbstractParseTreeVisitor_1.AbstractParseTreeVisitor));
exports.ConstraintVisitor = ConstraintVisitor;
