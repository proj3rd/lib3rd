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
var ContentsConstraintVisitor = /** @class */ (function (_super) {
    __extends(ContentsConstraintVisitor, _super);
    function ContentsConstraintVisitor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ContentsConstraintVisitor.prototype.defaultResult = function () {
        return {};
    };
    ContentsConstraintVisitor.prototype.visitChildren = function (contentsConstraintCtx) {
        var childCtxes = contentsConstraintCtx.children;
        var contentsConstraint = {};
        switch (childCtxes[0].text.toLowerCase()) {
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
}(AbstractParseTreeVisitor_1.AbstractParseTreeVisitor));
exports.ContentsConstraintVisitor = ContentsConstraintVisitor;
