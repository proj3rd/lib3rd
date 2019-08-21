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
var BuiltinValueVisitor = /** @class */ (function (_super) {
    __extends(BuiltinValueVisitor, _super);
    function BuiltinValueVisitor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BuiltinValueVisitor.prototype.defaultResult = function () {
        return undefined;
    };
    BuiltinValueVisitor.prototype.visitChildren = function (builtinValueCtx) {
        var subContext = builtinValueCtx.children[0];
        var contextName = utils_1.getContextName(subContext);
        var valueAssignment;
        if (!contextName) {
            // Corresponds to CSTRING or BSTRING
            valueAssignment = subContext.text;
        }
        switch (contextName) {
            case 'booleanValue': {
                valueAssignment = subContext.text.toLowerCase() === 'true';
                break;
            }
            case 'integerValue': {
                var valueText = subContext.text;
                var valueNumeric = Number(valueText);
                valueAssignment = isNaN(valueNumeric) ? valueText : valueNumeric;
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
                valueAssignment = subContext.text;
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
}(AbstractParseTreeVisitor_1.AbstractParseTreeVisitor));
exports.BuiltinValueVisitor = BuiltinValueVisitor;
