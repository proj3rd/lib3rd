"use strict";
exports.__esModule = true;
var logging_1 = require("../../utils/logging");
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
                logging_1.log.warn('ASN.1 BuiltinValue contains EnumeratedValue defined in X.680.' +
                    'This will not be treated in the current version');
                // TODO
                // break;
            }
            case 'choiceValue': {
                logging_1.log.warn('ASN.1 BuiltinValue contains ChoiceValue defined in X.680.' +
                    'This will not be treated in the current version');
                // TODO
                // break;
            }
            case 'objectIdentifierValue': {
                logging_1.log.warn('ASN.1 BuiltinValue contains ObjectIdentifierValue defined in X.680.' +
                    'This will not be treated in the current version');
                // TODO
                // break;
            }
            default: {
                logging_1.log.warn('ASN.1 BuiltinValue contains not supported context. This will not be treated in the current version');
            }
        }
    };
    return ValueAssignmentVisitor;
}());
exports.ValueAssignmentVisitor = ValueAssignmentVisitor;
