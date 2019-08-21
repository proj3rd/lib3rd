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
var elementSetSpecs_1 = require("./elementSetSpecs");
/**
 * ANTLR4 grammar
 * ```
 * subtypeConstraint	:
 * elementSetSpecs
 * ```
 */
var SubtypeConstraintVisitor = /** @class */ (function (_super) {
    __extends(SubtypeConstraintVisitor, _super);
    function SubtypeConstraintVisitor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SubtypeConstraintVisitor.prototype.defaultResult = function () {
        return undefined;
    };
    SubtypeConstraintVisitor.prototype.visitChildren = function (subtypeConstraintCtx) {
        var elementSetSpecs = subtypeConstraintCtx.children[0];
        return elementSetSpecs.accept(new elementSetSpecs_1.ElementSetSpecsVisitor());
    };
    return SubtypeConstraintVisitor;
}(AbstractParseTreeVisitor_1.AbstractParseTreeVisitor));
exports.SubtypeConstraintVisitor = SubtypeConstraintVisitor;
