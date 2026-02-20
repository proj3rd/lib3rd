"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SequenceOfTypeVisitor = void 0;
/* eslint-disable class-methods-use-this */
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const unimpl_1 = require("../../utils/unimpl");
const constraint_1 = require("../classes/constraint");
const nullType_1 = require("../classes/nullType");
const sequenceOfType_1 = require("../classes/sequenceOfType");
const asnTypeVisitor_1 = require("./asnTypeVisitor");
const namedTypeVisitor_1 = require("./namedTypeVisitor");
const sizeConstraintVisitor_1 = require("./sizeConstraintVisitor");
/**
 * # Grammar
 * ```
 * sequenceOfType:
 *   SEQUENCE_LITERAL (L_PARAN (constraint | sizeConstraint) R_PARAN)?
 *   OF_LITERAL (asnType | namedType )
 * ```
 */
class SequenceOfTypeVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    visitChildren(ctx) {
        let baseType;
        let constraint;
        const constraintCtx = ctx.constraint();
        if (constraintCtx !== undefined) {
            unimpl_1.unimpl(ctx.text);
        }
        const sizeConstraintCtx = ctx.sizeConstraint();
        if (sizeConstraintCtx !== undefined) {
            const sizeConstraint = sizeConstraintCtx.accept(new sizeConstraintVisitor_1.SizeConstraintVisitor());
            constraint = new constraint_1.Constraint(sizeConstraint);
        }
        const asnTypeCtx = ctx.asnType();
        if (asnTypeCtx !== undefined) {
            baseType = asnTypeCtx.accept(new asnTypeVisitor_1.AsnTypeVisitor());
        }
        const namedTypeCtx = ctx.namedType();
        if (namedTypeCtx !== undefined) {
            baseType = namedTypeCtx.accept(new namedTypeVisitor_1.NamedTypeVisitor());
        }
        if (baseType === undefined) {
            throw Error();
        }
        return new sequenceOfType_1.SequenceOfType(baseType, constraint);
    }
    defaultResult() {
        return new sequenceOfType_1.SequenceOfType(new nullType_1.NullType(), undefined);
    }
}
exports.SequenceOfTypeVisitor = SequenceOfTypeVisitor;
//# sourceMappingURL=sequenceOfTypeVisitor.js.map