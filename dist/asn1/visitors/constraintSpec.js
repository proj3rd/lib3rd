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
var generalConstraint_1 = require("./generalConstraint");
var subtypeConstraint_1 = require("./subtypeConstraint");
/**
 * ANTLR4 grammar
 * ```
 * constraintSpec : generalConstraint | subtypeConstraint
 * ```
 */
var ConstraintSpecVisitor = /** @class */ (function (_super) {
    __extends(ConstraintSpecVisitor, _super);
    function ConstraintSpecVisitor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ConstraintSpecVisitor.prototype.defaultResult = function () {
        return undefined;
    };
    ConstraintSpecVisitor.prototype.visitChildren = function (constraintSpecCtx) {
        var childCtx = constraintSpecCtx.children[0];
        var constraintSpec;
        switch (utils_1.getContextName(childCtx)) {
            case 'generalConstraint': {
                constraintSpec = childCtx.accept(new generalConstraint_1.GeneralConstraintVisitor());
                break;
            }
            case 'subtypeConstraint': {
                constraintSpec = childCtx.accept(new subtypeConstraint_1.SubtypeConstraintVisitor());
                break;
            }
            default: {
                logging_1.log.warn(utils_1.getLogWithAsn1(constraintSpecCtx, 'Not supported ASN1:'));
                break;
            }
        }
        return constraintSpec;
    };
    return ConstraintSpecVisitor;
}(AbstractParseTreeVisitor_1.AbstractParseTreeVisitor));
exports.ConstraintSpecVisitor = ConstraintSpecVisitor;
