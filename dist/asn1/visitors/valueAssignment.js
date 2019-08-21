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
var value_1 = require("./value");
/**
 * ANTLR4 grammar
 * ```
 * valueAssignment :
 *       asnType
 * 	   ASSIGN_OP
 *        value
 * ```
 */
var ValueAssignmentVisitor = /** @class */ (function (_super) {
    __extends(ValueAssignmentVisitor, _super);
    function ValueAssignmentVisitor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ValueAssignmentVisitor.prototype.defaultResult = function () {
        return undefined;
    };
    ValueAssignmentVisitor.prototype.visitChildren = function (valueAssignmentCtx) {
        var valueCtx = valueAssignmentCtx.children[2];
        return valueCtx.accept(new value_1.ValueVisitor());
    };
    return ValueAssignmentVisitor;
}(AbstractParseTreeVisitor_1.AbstractParseTreeVisitor));
exports.ValueAssignmentVisitor = ValueAssignmentVisitor;
