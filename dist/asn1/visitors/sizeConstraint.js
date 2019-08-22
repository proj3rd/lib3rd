"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const constraint_1 = require("./constraint");
/**
 * ANTLR4 grammar
 * ```
 * sizeConstraint : SIZE_LITERAL constraint
 * ```
 */
class SizeConstraintVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    defaultResult() {
        return undefined;
    }
    visitChildren(sizeConstraintCtx) {
        const childCtxes = sizeConstraintCtx.children;
        /** NOTE: It seems ciruclar function call
         * But it is expected to be {min, max} according to below:
         * X.680-201508, 51.5 Size constraint
         *   51.5.2 A "SizeConstraint" can only be applied to bit string types,
         *     octet string types, character string types, set-of types or sequence-of types.
         *   51.5.3 The "Constraint" specifies the permitted integer values for
         *     the length of the specified values, and takes the form of any constraint
         *     which can be applied to the following parent type:
         */
        const constraintCtx = childCtxes[1];
        return constraintCtx.accept(new constraint_1.ConstraintVisitor());
    }
}
exports.SizeConstraintVisitor = SizeConstraintVisitor;
