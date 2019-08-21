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
var builtinType_1 = require("./builtinType");
var constraint_1 = require("./constraint");
var referencedType_1 = require("./referencedType");
/**
 * ANTLR4 grammar
 * ```
 * asnType : (builtinType | referencedType) (constraint)*
 * ```
 */
var AsnTypeVisitor = /** @class */ (function (_super) {
    __extends(AsnTypeVisitor, _super);
    function AsnTypeVisitor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AsnTypeVisitor.prototype.defaultResult = function () {
        return undefined;
    };
    AsnTypeVisitor.prototype.visitChildren = function (asnTypeCtx) {
        var childCtxes = asnTypeCtx.children;
        var typeCtx = childCtxes[0];
        var constraintCtx = childCtxes[1];
        var contextName = utils_1.getContextName(typeCtx);
        var type;
        switch (contextName) {
            case 'builtinType': {
                type = typeCtx.accept(new builtinType_1.BuiltinTypeVisitor());
                break;
            }
            case 'referencedType': {
                type = typeCtx.accept(new referencedType_1.ReferencedTypeVisitor());
                break;
            }
            default: {
                logging_1.log.warn(utils_1.getLogWithAsn1(asnTypeCtx, 'Not supported ASN1 in Type:'));
            }
        }
        if (constraintCtx) {
            var constraint = constraintCtx.accept(new constraint_1.ConstraintVisitor());
            if (constraint && type && type.setConstraint) {
                type.setConstraint(constraint);
            }
        }
        return type;
    };
    return AsnTypeVisitor;
}(AbstractParseTreeVisitor_1.AbstractParseTreeVisitor));
exports.AsnTypeVisitor = AsnTypeVisitor;
