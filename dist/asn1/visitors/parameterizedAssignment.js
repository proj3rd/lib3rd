"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const TerminalNode_1 = require("antlr4ts/tree/TerminalNode");
const logging_1 = require("../../utils/logging");
const utils_1 = require("../utils");
const ASN_3gppParser_1 = require("../ASN_3gppParser");
const asnType_1 = require("./asnType");
const definedObjectClass_1 = require("./definedObjectClass");
const objectSet_1 = require("./objectSet");
const parameterList_1 = require("./parameterList");
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
class ParameterizedAssignmentVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    defaultResult() {
        return undefined;
    }
    visitChildren(parameterizedAssignmentCtx) {
        let parameterList;
        let definedObjectClass;
        let asnType;
        let object /* TODO */;
        const childCtxes = parameterizedAssignmentCtx.children;
        childCtxes.forEach((childCtx) => {
            if (childCtx instanceof ASN_3gppParser_1.ParameterListContext) {
                parameterList = childCtx.accept(new parameterList_1.ParameterListVisitor());
            }
            else if (childCtx instanceof ASN_3gppParser_1.AsnTypeContext) {
                asnType = childCtx.accept(new asnType_1.AsnTypeVisitor());
            }
            else if (childCtx instanceof ASN_3gppParser_1.ValueContext) {
                logging_1.log.warn(utils_1.getLogWithAsn1(parameterizedAssignmentCtx, 'ParameterizedValueAssignment not supported'));
            }
            else if (childCtx instanceof ASN_3gppParser_1.ValueSetContext) {
                logging_1.log.warn(utils_1.getLogWithAsn1(parameterizedAssignmentCtx, 'ParameterizedValueSetAssignment not supported'));
            }
            else if (childCtx instanceof TerminalNode_1.TerminalNode) {
                // Do nothing
            }
            else if (childCtx instanceof ASN_3gppParser_1.DefinedObjectClassContext) {
                definedObjectClass = childCtx.accept(new definedObjectClass_1.DefinedObjectClassVisitor());
            }
            else if (childCtx instanceof ASN_3gppParser_1.ObjectClassContext) {
                logging_1.log.warn(new Error('TODO: ObjectClassContext'));
            }
            else if (childCtx instanceof ASN_3gppParser_1.ObjectSetContext) {
                object = childCtx.accept(new objectSet_1.ObjectSetVisitor());
            }
            else {
                logging_1.log.warn(new Error(utils_1.getLogWithAsn1(parameterizedAssignmentCtx, 'Not supported ASN.1')));
            }
        });
        if (asnType) {
            asnType.parameterList = parameterList;
            return asnType;
        }
        if (object) {
            object.definedObjectClass = definedObjectClass;
            return object;
        }
    }
}
exports.ParameterizedAssignmentVisitor = ParameterizedAssignmentVisitor;
