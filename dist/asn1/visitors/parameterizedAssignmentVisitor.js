"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const unimpl_1 = require("unimpl");
const ASN_3gppParser_1 = require("../grammar/ASN_3gppParser");
const asnTypeVisitor_1 = require("./asnTypeVisitor");
const definedObjectClassVisitor_1 = require("./definedObjectClassVisitor");
const objectSetVisitor_1 = require("./objectSetVisitor");
const parameterListVisitor_1 = require("./parameterListVisitor");
/**
 * # Grammar
 * ```
 * parameterizedAssignment:
 *   parameterList (ASSIGN_OP (asnType | value | valueSet)) |
 *   (definedObjectClass ASSIGN_OP (object | objectClass | objectSet))
 * ```
 */
class ParameterizedAssignmentVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    visitChildren(ctx) {
        const parameterListCtx = ctx.parameterList();
        const thirdCtx = ctx.getChild(2);
        if (parameterListCtx !== undefined) {
            const parameters = parameterListCtx.accept(new parameterListVisitor_1.ParameterListVisitor());
            if (thirdCtx instanceof ASN_3gppParser_1.AsnTypeContext) {
                const asnType = thirdCtx.accept(new asnTypeVisitor_1.AsnTypeVisitor());
                return { parameterizedTypeAssignmentElements: { parameters, asnType } };
            }
            else if (thirdCtx instanceof ASN_3gppParser_1.ValueContext) {
                return unimpl_1.unimpl();
            }
            else if (thirdCtx instanceof ASN_3gppParser_1.ValueSetContext) {
                return unimpl_1.unimpl();
            }
            throw Error();
        }
        const definedObjectClassCtx = ctx.definedObjectClass();
        if (definedObjectClassCtx !== undefined) {
            const definedObjectClass = definedObjectClassCtx.accept(new definedObjectClassVisitor_1.DefinedObjectClassVisitor());
            if (thirdCtx instanceof ASN_3gppParser_1.ObjectContext) {
                return unimpl_1.unimpl();
            }
            else if (thirdCtx instanceof ASN_3gppParser_1.ObjectClassContext) {
                return unimpl_1.unimpl();
            }
            else if (thirdCtx instanceof ASN_3gppParser_1.ObjectSetContext) {
                const objectSet = thirdCtx.accept(new objectSetVisitor_1.ObjectSetVisitor());
                return {
                    objectSetAssignmentElements: { definedObjectClass, objectSet },
                };
            }
            throw Error();
        }
        throw Error();
    }
    defaultResult() {
        return unimpl_1.unimpl();
    }
}
exports.ParameterizedAssignmentVisitor = ParameterizedAssignmentVisitor;
//# sourceMappingURL=parameterizedAssignmentVisitor.js.map