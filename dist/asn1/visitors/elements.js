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
var sizeConstraint_1 = require("./sizeConstraint");
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
var ElementsVisitor = /** @class */ (function (_super) {
    __extends(ElementsVisitor, _super);
    function ElementsVisitor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ElementsVisitor.prototype.defaultResult = function () {
        return undefined;
    };
    ElementsVisitor.prototype.visitChildren = function (elementsCtx) {
        var subtypeElementsCtx = elementsCtx.children[0];
        var childCount = subtypeElementsCtx.childCount;
        var childCtxFirst = subtypeElementsCtx.getChild(0);
        var childCtxLast = subtypeElementsCtx.getChild(childCount - 1);
        var elements;
        switch (subtypeElementsCtx.childCount) {
            case 1: {
                // sizeConstraint
                // value
                switch (utils_1.getContextName(childCtxFirst)) {
                    case 'sizeConstraint': {
                        var sizeConstraintCtx = childCtxFirst;
                        elements = sizeConstraintCtx.accept(new sizeConstraint_1.SizeConstraintVisitor());
                        break;
                    }
                    case 'value': {
                        var valueCtx = childCtxFirst;
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
                if (childCount > 3) {
                    logging_1.log.warn(utils_1.getLogWithAsn1(elementsCtx, '\'<\' or \'>\' not supported:'));
                }
                var minCtx = childCtxFirst;
                var min = utils_1.getContextName(minCtx) === 'value' ? minCtx.accept(new value_1.ValueVisitor()) : minCtx.text;
                var maxCtx = childCtxLast;
                var max = utils_1.getContextName(maxCtx) === 'value' ? maxCtx.accept(new value_1.ValueVisitor()) : maxCtx.text;
                elements = { min: min, max: max };
                break;
            }
        }
        return elements;
    };
    return ElementsVisitor;
}(AbstractParseTreeVisitor_1.AbstractParseTreeVisitor));
exports.ElementsVisitor = ElementsVisitor;
