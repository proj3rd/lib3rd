"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const logging_1 = require("../../utils/logging");
const utils_1 = require("../utils");
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const integer_1 = require("../classes/integer");
/**
 * ANTLR4 grammar
 * ```
 * integerType:INTEGER_LITERAL  (L_BRACE namedNumberList R_BRACE)?
 * ```
 */
class IntegerTypeVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    defaultResult() {
        return undefined;
    }
    visitChildren(integerTypeCtx) {
        if (integerTypeCtx.children.length > 1) {
            logging_1.log.warn(utils_1.getLogWithAsn1(integerTypeCtx, 'NamedNumberList not supported:'));
        }
        return new integer_1.Integer();
    }
}
exports.IntegerTypeVisitor = IntegerTypeVisitor;
