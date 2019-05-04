"use strict";
exports.__esModule = true;
var logging_1 = require("../../utils/logging");
var utils_1 = require("../utils");
var contentsConstraint_1 = require("./contentsConstraint");
/**
 * ANTLR4 grammar
 * ```
 * generalConstraint :  userDefinedConstraint | tableConstraint | contentsConstraint
 * ```
 */
var GeneralConstraintVisitor = /** @class */ (function () {
    function GeneralConstraintVisitor() {
    }
    GeneralConstraintVisitor.prototype.visitChildren = function (generalConstraintCtx) {
        var childCtx = generalConstraintCtx.children[0];
        var generalConstraint = null;
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
}());
exports.GeneralConstraintVisitor = GeneralConstraintVisitor;
