"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var logging_1 = require("../../utils/logging");
var utils_1 = require("../utils");
var asnType_1 = require("./asnType");
var componentPresenceLists_1 = require("./componentPresenceLists");
var value_1 = require("./value");
/**
 * ANTLR4 grammar
 * ```contentsConstraint :
 *    CONTAINING_LITERAL asnType
 *  |  ENCODED_LITERAL BY_LITERAL value
 *  |  CONTAINING_LITERAL asnType ENCODED_LITERAL BY_LITERAL value
 *  |  WITH_LITERAL COMPONENTS_LITERAL L_BRACE componentPresenceLists R_BRACE
 * ```
 */
var ContentsConstraintVisitor = /** @class */ (function () {
    function ContentsConstraintVisitor() {
    }
    ContentsConstraintVisitor.prototype.visitChildren = function (contentsConstraintCtx) {
        var childCtxes = contentsConstraintCtx.children;
        var contentsConstraint = {};
        switch (childCtxes[0].getText().toLowerCase()) {
            case 'containing': {
                var asnTypeCtx = childCtxes[1];
                var asnType = asnTypeCtx.accept(new asnType_1.AsnTypeVisitor());
                contentsConstraint.containing = asnType;
                var valueCtx = childCtxes[4];
                if (valueCtx) {
                    var value = valueCtx.accept(new value_1.ValueVisitor());
                    contentsConstraint.encodedBy = value;
                }
                break;
            }
            case 'encoded': {
                logging_1.log.warn(utils_1.getLogWithAsn1(contentsConstraintCtx, 'Encoded not supported:'));
                break;
            }
            case 'with': {
                var componentPresenceListsCtx = childCtxes[3];
                var componentPresenceLists = componentPresenceListsCtx.accept(new componentPresenceLists_1.ComponentPresenceListsVisitor());
                contentsConstraint.withComponents = componentPresenceLists;
                break;
            }
            default: {
                logging_1.log.warn(utils_1.getLogWithAsn1(contentsConstraintCtx, 'Not supported ASN1:'));
                break;
            }
        }
        return contentsConstraint;
    };
    return ContentsConstraintVisitor;
}());
exports.ContentsConstraintVisitor = ContentsConstraintVisitor;
