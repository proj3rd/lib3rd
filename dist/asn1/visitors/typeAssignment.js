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
var asnType_1 = require("./asnType");
/**
 * ANTLR4 grammar
 * ```
 * typeAssignment :
 *       ASSIGN_OP
 *       asnType
 * ```
 */
var TypeAssignmentVisitor = /** @class */ (function (_super) {
    __extends(TypeAssignmentVisitor, _super);
    function TypeAssignmentVisitor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TypeAssignmentVisitor.prototype.defaultResult = function () {
        return undefined;
    };
    TypeAssignmentVisitor.prototype.visitChildren = function (typeAssignmentCtx) {
        return typeAssignmentCtx.children[1].accept(new asnType_1.AsnTypeVisitor());
    };
    return TypeAssignmentVisitor;
}(AbstractParseTreeVisitor_1.AbstractParseTreeVisitor));
exports.TypeAssignmentVisitor = TypeAssignmentVisitor;
