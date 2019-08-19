"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
var ParameterizedAssignmentVisitor = /** @class */ (function () {
    function ParameterizedAssignmentVisitor() {
    }
    ParameterizedAssignmentVisitor.prototype.visitChildren = function (parameterizedAssignmentCtx) {
        var parameterList = null;
        var asnType = null;
        var childCtxes = parameterizedAssignmentCtx.children;
        childCtxes.every(function (childCtx /* TODO */) {
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
            return asnType;
        }
        return null;
    };
    return ParameterizedAssignmentVisitor;
}());
exports.ParameterizedAssignmentVisitor = ParameterizedAssignmentVisitor;
