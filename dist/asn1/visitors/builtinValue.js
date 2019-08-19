"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var logging_1 = require("../../utils/logging");
var utils_1 = require("../utils");
var enumeratedValue_1 = require("./enumeratedValue");
/**
 * ANTLR4 grammar
 * ```
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
var BuiltinValueVisitor = /** @class */ (function () {
    function BuiltinValueVisitor() {
    }
    BuiltinValueVisitor.prototype.visitChildren = function (builtinValueCtx) {
        var subContext = builtinValueCtx.children[0];
        var contextName = utils_1.getContextName(subContext);
        var valueAssignment = null;
        if (!contextName) {
            // Corresponds to CSTRING or BSTRING
            valueAssignment = subContext.getText();
        }
        switch (contextName) {
            case 'booleanValue': {
                valueAssignment = subContext.getText().toLowerCase() === 'true';
                break;
            }
            case 'integerValue': {
                var valueText = subContext.getText();
                var valueNumeric = Number(valueText);
                valueAssignment = valueNumeric === valueText ? valueNumeric : valueText;
                break;
            }
            case 'enumeratedValue': {
                /** NOTE: Since enum and interger are defined as below:
                 *   enumeratedValue  : IDENTIFIER
                 *   integerValue :  signedNumber | IDENTIFIER
                 * and enum precedes integer, integer may be incorrectly parsed as enum
                 */
                valueAssignment = subContext.accept(new enumeratedValue_1.EnumeratedValueVisitor());
                break;
            }
            case 'choiceValue': {
                logging_1.log.warn(utils_1.getLogWithAsn1(builtinValueCtx, 'ChoiceValue not supported:'));
                // TODO
                break;
            }
            case 'objectIdentifierValue': {
                logging_1.log.warn(utils_1.getLogWithAsn1(builtinValueCtx, 'ObjectIdentifierValue not supported:'));
                // TODO
                break;
            }
            case null: {
                valueAssignment = subContext.getText();
                break;
            }
            default: {
                logging_1.log.warn(utils_1.getLogWithAsn1(builtinValueCtx, 'Not supported ASN1 in BuiltinValue:'));
                break;
            }
        }
        return valueAssignment;
    };
    return BuiltinValueVisitor;
}());
exports.BuiltinValueVisitor = BuiltinValueVisitor;
