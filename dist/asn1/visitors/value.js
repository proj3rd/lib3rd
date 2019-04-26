"use strict";
exports.__esModule = true;
var logging_1 = require("../../utils/logging");
var utils_1 = require("../utils");
/**
 * ANTLR4 grammar
 * ```
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
var ValueVisitor = /** @class */ (function () {
    function ValueVisitor() {
    }
    ValueVisitor.prototype.visitChildren = function (valueCtx) {
        var builtinValueCtx = valueCtx.children[0];
        var subContext = builtinValueCtx.children[0];
        var contextName = utils_1.getContextName(subContext);
        if (!contextName) {
            // Corresponds to CSTRING or BSTRING
            return subContext.getText();
        }
        console.log(subContext);
        switch (contextName) {
            case 'booleanValue': {
                return subContext.getText();
            }
            case 'integerValue': {
                return subContext.getText();
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
                logging_1.log.warn('ASN.1 BuiltinValue contains not supported context');
                logging_1.log.warn('This will not be treated in the current version');
            }
        }
    };
    return ValueVisitor;
}());
exports.ValueVisitor = ValueVisitor;
