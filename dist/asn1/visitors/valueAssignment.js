"use strict";
exports.__esModule = true;
var utils_1 = require("../utils");
/**
 * ANTLR4 grammar
 * ```
 * valueAssignment :
 *       asnType
 * 	   ASSIGN_OP
 *        value
 * value  :   builtinValue
 * builtinValue :
 *     enumeratedValue
 *   |	integerValue
 *   |	choiceValue
 *   |	objectIdentifierValue
 *   |	booleanValue
 *   |   CSTRING
 *   |   BSTRING
 * ```
 */
var ValueAssignmentVisitor = /** @class */ (function () {
    function ValueAssignmentVisitor() {
    }
    ValueAssignmentVisitor.prototype.visitChildren = function (valueAssignmentCtx) {
        var valueCtx = valueAssignmentCtx.children[2];
        var builtinValueCtx = valueCtx.children[0];
        var subContext = builtinValueCtx.children[0];
        var contextName = utils_1.getContextName(subContext);
        if (!contextName) {
            // Corresponds to CSTRING or BSTRING
            return subContext.getText();
        }
        switch (contextName) {
            case 'booleanValue': {
                return subContext.getText().toLowerCase() === 'true';
            }
            case 'integerValue': {
                return Number(subContext.getText());
            }
            case 'enumeratedValue': {
                // TODO
                // break;
            }
            case 'choiceValue': {
                // TODO
                // break;
            }
            case 'objectIdentifierValue': {
                // TODO
                // break;
            }
            default: {
                utils_1.warnNotSupportedAsn1(builtinValueCtx);
            }
        }
    };
    return ValueAssignmentVisitor;
}());
exports.ValueAssignmentVisitor = ValueAssignmentVisitor;
