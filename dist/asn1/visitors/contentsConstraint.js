"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const logging_1 = require("../../utils/logging");
const utils_1 = require("../utils");
const asnType_1 = require("./asnType");
const componentPresenceLists_1 = require("./componentPresenceLists");
const value_1 = require("./value");
/**
 * ANTLR4 grammar
 * ```contentsConstraint :
 *    CONTAINING_LITERAL asnType
 *  |  ENCODED_LITERAL BY_LITERAL value
 *  |  CONTAINING_LITERAL asnType ENCODED_LITERAL BY_LITERAL value
 *  |  WITH_LITERAL COMPONENTS_LITERAL L_BRACE componentPresenceLists R_BRACE
 * ```
 */
class ContentsConstraintVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    defaultResult() {
        return {};
    }
    visitChildren(contentsConstraintCtx) {
        const childCtxes = contentsConstraintCtx.children;
        const contentsConstraint = {};
        switch (childCtxes[0].text.toLowerCase()) {
            case 'containing': {
                const asnTypeCtx = childCtxes[1];
                const asnType = asnTypeCtx.accept(new asnType_1.AsnTypeVisitor());
                contentsConstraint.containing = asnType;
                const valueCtx = childCtxes[4];
                if (valueCtx) {
                    const value = valueCtx.accept(new value_1.ValueVisitor());
                    contentsConstraint.encodedBy = value;
                }
                break;
            }
            case 'encoded': {
                logging_1.log.warn(utils_1.getLogWithAsn1(contentsConstraintCtx, 'Encoded not supported:'));
                break;
            }
            case 'with': {
                const componentPresenceListsCtx = childCtxes[3];
                const componentPresenceLists = componentPresenceListsCtx.accept(new componentPresenceLists_1.ComponentPresenceListsVisitor());
                contentsConstraint.withComponents = componentPresenceLists;
                break;
            }
            default: {
                logging_1.log.warn(utils_1.getLogWithAsn1(contentsConstraintCtx, 'Not supported ASN1:'));
                break;
            }
        }
        return contentsConstraint;
    }
}
exports.ContentsConstraintVisitor = ContentsConstraintVisitor;
