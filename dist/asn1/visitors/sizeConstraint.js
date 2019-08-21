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
var constraint_1 = require("./constraint");
/**
 * ANTLR4 grammar
 * ```
 * sizeConstraint : SIZE_LITERAL constraint
 * ```
 */
var SizeConstraintVisitor = /** @class */ (function (_super) {
    __extends(SizeConstraintVisitor, _super);
    function SizeConstraintVisitor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SizeConstraintVisitor.prototype.defaultResult = function () {
        return undefined;
    };
    SizeConstraintVisitor.prototype.visitChildren = function (sizeConstraintCtx) {
        var childCtxes = sizeConstraintCtx.children;
        /** NOTE: It seems ciruclar function call
         * But it is expected to be {min, max} according to below:
         * X.680-201508, 51.5 Size constraint
         *   51.5.2 A "SizeConstraint" can only be applied to bit string types,
         *     octet string types, character string types, set-of types or sequence-of types.
         *   51.5.3 The "Constraint" specifies the permitted integer values for
         *     the length of the specified values, and takes the form of any constraint
         *     which can be applied to the following parent type:
         */
        var constraintCtx = childCtxes[1];
        return constraintCtx.accept(new constraint_1.ConstraintVisitor());
    };
    return SizeConstraintVisitor;
}(AbstractParseTreeVisitor_1.AbstractParseTreeVisitor));
exports.SizeConstraintVisitor = SizeConstraintVisitor;
