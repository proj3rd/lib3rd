"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const TerminalNode_1 = require("antlr4ts/tree/TerminalNode");
const logging_1 = require("../../utils/logging");
const utils_1 = require("../utils");
const ASN_3gppParser_1 = require("../ASN_3gppParser");
const enumeratedValue_1 = require("./enumeratedValue");
const objectIdentifierValue_1 = require("./objectIdentifierValue");
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
class BuiltinValueVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    defaultResult() {
        return undefined;
    }
    visitChildren(builtinValueCtx) {
        const subContext = builtinValueCtx.children[0];
        let valueAssignment;
        if (subContext instanceof TerminalNode_1.TerminalNode) {
            // Corresponds to CSTRING or BSTRING
            valueAssignment = subContext.text;
        }
        if (subContext instanceof ASN_3gppParser_1.BooleanValueContext) {
            valueAssignment = subContext.text.toLowerCase() === 'true';
        }
        else if (subContext instanceof ASN_3gppParser_1.IntegerValueContext) {
            const valueText = subContext.text;
            const valueNumeric = Number(valueText);
            valueAssignment = isNaN(valueNumeric) ? valueText : valueNumeric;
        }
        else if (subContext instanceof ASN_3gppParser_1.EnumeratedValueContext) {
            /** NOTE: Since enum and interger are defined as below:
             *   enumeratedValue  : IDENTIFIER
             *   integerValue :  signedNumber | IDENTIFIER
             * and enum precedes integer, integer may be incorrectly parsed as enum
             */
            valueAssignment = subContext.accept(new enumeratedValue_1.EnumeratedValueVisitor());
        }
        else if (subContext instanceof ASN_3gppParser_1.ChoiceValueContext) {
            logging_1.log.warn(utils_1.getLogWithAsn1(builtinValueCtx, 'ChoiceValue not supported:'));
            // TODO
        }
        else if (subContext instanceof ASN_3gppParser_1.ObjectIdentifierValueContext) {
            valueAssignment = subContext.accept(new objectIdentifierValue_1.ObjectIdentifierValueVisitor());
        }
        else if (subContext instanceof TerminalNode_1.TerminalNode) {
            valueAssignment = subContext.text;
        }
        else {
            logging_1.log.warn(utils_1.getLogWithAsn1(builtinValueCtx, 'Not supported ASN1 in BuiltinValue:'));
        }
        return valueAssignment;
    }
}
exports.BuiltinValueVisitor = BuiltinValueVisitor;
