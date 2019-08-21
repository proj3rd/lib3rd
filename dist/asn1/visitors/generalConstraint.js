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
var contentsConstraint_1 = require("./contentsConstraint");
/**
 * ANTLR4 grammar
 * ```
 * generalConstraint :  userDefinedConstraint | tableConstraint | contentsConstraint
 * ```
 */
var GeneralConstraintVisitor = /** @class */ (function (_super) {
    __extends(GeneralConstraintVisitor, _super);
    function GeneralConstraintVisitor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GeneralConstraintVisitor.prototype.defaultResult = function () {
        return undefined;
    };
    GeneralConstraintVisitor.prototype.visitChildren = function (generalConstraintCtx) {
        var childCtx = generalConstraintCtx.children[0];
        var generalConstraint;
        switch (utils_1.getContextName(childCtx)) {
            case 'userDefinedConstraint': {
                logging_1.log.warn(utils_1.getLogWithAsn1(childCtx, 'UserDefinedConstraint not supported:'));
                break;
            }
            case 'tableConstraint': {
                logging_1.log.warn(utils_1.getLogWithAsn1(childCtx, 'TableConstraint not supported:'));
                break;
            }
            case 'contentsConstraint': {
                generalConstraint = childCtx.accept(new contentsConstraint_1.ContentsConstraintVisitor());
                break;
            }
            default: {
                logging_1.log.warn(utils_1.getLogWithAsn1(childCtx, 'Not supported ASN1:'));
                break;
            }
        }
        return generalConstraint;
    };
    return GeneralConstraintVisitor;
}(AbstractParseTreeVisitor_1.AbstractParseTreeVisitor));
exports.GeneralConstraintVisitor = GeneralConstraintVisitor;
