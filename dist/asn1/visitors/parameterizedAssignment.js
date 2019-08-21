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
var parameterList_1 = require("./parameterList");
/**
 * ANTLR4 grammar
 * ```
 * parameterizedAssignment :
 *  parameterList
 * (ASSIGN_OP
 * 	(asnType
 * 		|	value
 * 		|	valueSet
 * 	)
 * )
 * |( definedObjectClass ASSIGN_OP
 * 	( object
 * 		|	objectClass
 * 		|	objectSet
 * 	)
 * )
 * ;
 * ```
 */
var ParameterizedAssignmentVisitor = /** @class */ (function (_super) {
    __extends(ParameterizedAssignmentVisitor, _super);
    function ParameterizedAssignmentVisitor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ParameterizedAssignmentVisitor.prototype.defaultResult = function () {
        return undefined;
    };
    ParameterizedAssignmentVisitor.prototype.visitChildren = function (parameterizedAssignmentCtx) {
        var parameterList;
        var asnType;
        var childCtxes = parameterizedAssignmentCtx.children;
        childCtxes.every(function (childCtx) {
            switch (utils_1.getContextName(childCtx)) {
                case 'parameterList': {
                    parameterList = childCtx.accept(new parameterList_1.ParameterListVisitor());
                    break;
                }
                case 'asnType': {
                    asnType = childCtx.accept(new asnType_1.AsnTypeVisitor());
                    break;
                }
                case 'value': {
                    logging_1.log.warn(utils_1.getLogWithAsn1(parameterizedAssignmentCtx, 'ParameterizedValueAssignment not supported'));
                    return false;
                }
                case 'valueSet': {
                    logging_1.log.warn(utils_1.getLogWithAsn1(parameterizedAssignmentCtx, 'ParameterizedValueSetAssignment not supported'));
                    return false;
                }
                case null: {
                    break;
                }
                default: {
                    logging_1.log.warn(utils_1.getLogWithAsn1(parameterizedAssignmentCtx, 'Not supported ASN.1'));
                    return false;
                }
            }
            return true;
        });
        if (asnType) {
            asnType.parameterList = parameterList;
        }
        return asnType;
    };
    return ParameterizedAssignmentVisitor;
}(AbstractParseTreeVisitor_1.AbstractParseTreeVisitor));
exports.ParameterizedAssignmentVisitor = ParameterizedAssignmentVisitor;
