"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const logging_1 = require("../../utils/logging");
const utils_1 = require("../utils");
const ASN_3gppParser_1 = require("../ASN_3gppParser");
const singleValue_1 = require("../classes/singleValue");
const valueRange_1 = require("../classes/valueRange");
const sizeConstraint_1 = require("./sizeConstraint");
const value_1 = require("./value");
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
class ElementsVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    defaultResult() {
        return undefined;
    }
    visitChildren(elementsCtx) {
        const subtypeElementsCtx = elementsCtx.children[0];
        const childCount = subtypeElementsCtx.childCount;
        const childCtxFirst = subtypeElementsCtx.getChild(0);
        const childCtxLast = subtypeElementsCtx.getChild(childCount - 1);
        let elements;
        switch (subtypeElementsCtx.childCount) {
            case 1: {
                // sizeConstraint
                // value
                if (childCtxFirst instanceof ASN_3gppParser_1.SizeConstraintContext) {
                    const sizeConstraintCtx = childCtxFirst;
                    elements = sizeConstraintCtx.accept(new sizeConstraint_1.SizeConstraintVisitor());
                }
                else if (childCtxFirst instanceof ASN_3gppParser_1.ValueContext) {
                    const valueCtx = childCtxFirst;
                    elements = new singleValue_1.SingleValue(valueCtx.accept(new value_1.ValueVisitor()));
                }
                else {
                    logging_1.log.warn(utils_1.getLogWithAsn1(elementsCtx, 'Not supported ASN1:'));
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
                if (childCount > 3) {
                    logging_1.log.warn(utils_1.getLogWithAsn1(elementsCtx, '\'<\' or \'>\' not supported:'));
                }
                const minCtx = childCtxFirst;
                const min = minCtx instanceof ASN_3gppParser_1.ValueContext ? minCtx.accept(new value_1.ValueVisitor()) : minCtx.text;
                const maxCtx = childCtxLast;
                const max = maxCtx instanceof ASN_3gppParser_1.ValueContext ? maxCtx.accept(new value_1.ValueVisitor()) : maxCtx.text;
                elements = new valueRange_1.ValueRange({ min, max });
                break;
            }
        }
        return elements;
    }
}
exports.ElementsVisitor = ElementsVisitor;
