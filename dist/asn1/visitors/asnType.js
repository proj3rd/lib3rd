"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const logging_1 = require("../../utils/logging");
const utils_1 = require("../utils");
const ASN_3gppParser_1 = require("../ASN_3gppParser");
const builtinType_1 = require("./builtinType");
const constraint_1 = require("./constraint");
const referencedType_1 = require("./referencedType");
/**
 * ANTLR4 grammar
 * ```
 * asnType : (builtinType | referencedType) (constraint)*
 * ```
 */
class AsnTypeVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    defaultResult() {
        return undefined;
    }
    visitChildren(asnTypeCtx) {
        const childCtxes = asnTypeCtx.children;
        const typeCtx = childCtxes[0];
        const constraintCtxes = childCtxes.slice(1);
        let type;
        if (typeCtx instanceof ASN_3gppParser_1.BuiltinTypeContext) {
            type = typeCtx.accept(new builtinType_1.BuiltinTypeVisitor());
        }
        else if (typeCtx instanceof ASN_3gppParser_1.ReferencedTypeContext) {
            type = typeCtx.accept(new referencedType_1.ReferencedTypeVisitor());
        }
        else {
            logging_1.log.warn(utils_1.getLogWithAsn1(asnTypeCtx, 'Not supported ASN1 in Type:'));
        }
        if (constraintCtxes) {
            const constraints = constraintCtxes.map((ctx) => ctx.accept(new constraint_1.ConstraintVisitor()));
            if (constraints && type && type.setConstraint) {
                type.setConstraint(constraints);
            }
        }
        return type;
    }
}
exports.AsnTypeVisitor = AsnTypeVisitor;
