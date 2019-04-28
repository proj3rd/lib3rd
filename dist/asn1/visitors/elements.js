"use strict";
exports.__esModule = true;
var logging_1 = require("../../utils/logging");
var utils_1 = require("../utils");
var value_1 = require("./value");
/**
 * ANTLR4 grammar
 * ```
 * elements  : subtypeElements
 * subtypeElements :
 *   ((value | MIN_LITERAL) LESS_THAN?  DOUBLE_DOT LESS_THAN?  (value | MAX_LITERAL) )
 *   |sizeConstraint
 *  | (PATTERN_LITERAL value)
 *  | value
 * ```
 */
var ElementsVisitor = /** @class */ (function () {
    function ElementsVisitor() {
    }
    ElementsVisitor.prototype.visitChildren = function (elementsCtx) {
        var subtypeElementsCtx = elementsCtx.children[0];
        var childCtxes = subtypeElementsCtx.children;
        var elements = null;
        switch (childCtxes.length) {
            case 1: {
                // sizeConstraint
                // value
                switch (utils_1.getContextName(childCtxes[0])) {
                    case 'sizeConstraint': {
                        logging_1.log.warn(utils_1.getLogWithAsn1(elementsCtx, 'SizeConstraint not supported:'));
                        break;
                    }
                    case 'value': {
                        var valueCtx = childCtxes[0];
                        elements = { value: valueCtx.accept(new value_1.ValueVisitor()) };
                        break;
                    }
                    default: {
                        logging_1.log.warn(utils_1.getLogWithAsn1(elementsCtx, 'Not supported ASN1:'));
                        break;
                    }
                }
                break;
            }
            case 2: {
                // (PATTERN_LITERAL value)
                logging_1.log.warn(utils_1.getLogWithAsn1(elementsCtx, 'PatternConstraint not supported:'));
                break;
            }
            default: {
                // ((value | MIN_LITERAL) LESS_THAN?  DOUBLE_DOT LESS_THAN?  (value | MAX_LITERAL) )
                /** NOTE: value is expected to be string (IDENTIFIER) or number (integer)
                 */
                if (childCtxes.length > 3) {
                    logging_1.log.warn(utils_1.getLogWithAsn1(elementsCtx, '\'<\' or \'>\' not supported:'));
                }
                var minCtx = childCtxes[0];
                var min = utils_1.getContextName(minCtx) === 'value' ? minCtx.accept(new value_1.ValueVisitor()) : minCtx.getText();
                var maxCtx = childCtxes[childCtxes.length - 1];
                var max = utils_1.getContextName(maxCtx) === 'value' ? maxCtx.accept(new value_1.ValueVisitor()) : maxCtx.getText();
                elements = { min: min, max: max };
                break;
            }
        }
        return elements;
    };
    return ElementsVisitor;
}());
exports.ElementsVisitor = ElementsVisitor;
