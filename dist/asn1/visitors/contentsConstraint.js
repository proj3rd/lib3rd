"use strict";
exports.__esModule = true;
var logging_1 = require("../../utils/logging");
var utils_1 = require("../utils");
/**
 * ANTLR4 grammar
 * ```contentsConstraint :
 *    CONTAINING_LITERAL asnType
 *  |  ENCODED_LITERAL BY_LITERAL value
 *  |  CONTAINING_LITERAL asnType ENCODED_LITERAL BY_LITERAL value
 *  |  WITH_LITERAL COMPONENTS_LITERAL L_BRACE componentPresenceLists R_BRACE
 * ```
 */
var ContentsConstraintVisitor = /** @class */ (function () {
    function ContentsConstraintVisitor() {
    }
    ContentsConstraintVisitor.prototype.visitChildren = function (contentsConstraintCtx) {
        logging_1.log.warn(utils_1.getLogWithAsn1(contentsConstraintCtx, 'ContentsConstraint not supported:'));
    };
    return ContentsConstraintVisitor;
}());
exports.ContentsConstraintVisitor = ContentsConstraintVisitor;
