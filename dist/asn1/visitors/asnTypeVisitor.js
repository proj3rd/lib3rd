"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable class-methods-use-this */
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const nullType_1 = require("../classes/nullType");
const grammar3rdParser_1 = require("../grammar/grammar3rdParser");
const builtinTypeVisitor_1 = require("./builtinTypeVisitor");
const constraintVisitor_1 = require("./constraintVisitor");
const referencedTypeVisitor_1 = require("./referencedTypeVisitor");
/**
 * # Grammar
 * ```
 * asnType: (builtinType | referencedType) (constraint)*
 * ```
 */
class AsnTypeVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    visitChildren(ctx) {
        let asnType;
        const firstCtx = ctx.getChild(0);
        if (firstCtx instanceof grammar3rdParser_1.BuiltinTypeContext) {
            asnType = firstCtx.accept(new builtinTypeVisitor_1.BuiltinTypeVisitor());
        }
        else if (firstCtx instanceof grammar3rdParser_1.ReferencedTypeContext) {
            asnType = firstCtx.accept(new referencedTypeVisitor_1.ReferencedTypeVisitor());
        }
        else {
            throw Error();
        }
        if (asnType === undefined) {
            throw Error();
        }
        const constraintCtxes = ctx.constraint();
        const constraints = constraintCtxes
            .map((constraintCtx) => constraintCtx.accept(new constraintVisitor_1.ConstraintVisitor()));
        asnType.setConstraints(constraints);
        return asnType;
    }
    defaultResult() {
        return nullType_1.NullType.getInstance();
    }
}
exports.AsnTypeVisitor = AsnTypeVisitor;
//# sourceMappingURL=asnTypeVisitor.js.map