"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjIdComponentsVisitor = void 0;
/* eslint-disable class-methods-use-this */
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const unimpl_1 = require("../../utils/unimpl");
const grammar3rdParser_1 = require("../grammar/grammar3rdParser");
const builtinTypeVisitor_1 = require("./builtinTypeVisitor");
const constraintVisitor_1 = require("./constraintVisitor");
/**
 * # Grammar
 * ```
 * objIdComponents:
 *     NUMBER
 *   | IDENTIFIER (L_PARAN (NUMBER | definedValue ) R_PARAN)?
 *   | definedValue
 *   // 3GPP-specific: Syntactic sugar for {BIT, OCTET} STRING and other complex definition
 *   | builtinType constraint?
 * ```
 */
class ObjIdComponentsVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    visitChildren(ctx) {
        const { childCount } = ctx;
        const firstCtx = ctx.getChild(0);
        if (firstCtx instanceof grammar3rdParser_1.DefinedValueContext) {
            return unimpl_1.todo();
        }
        if (firstCtx instanceof grammar3rdParser_1.BuiltinTypeContext) {
            const builtinType = firstCtx.accept(new builtinTypeVisitor_1.BuiltinTypeVisitor());
            const constraintCtx = ctx.constraint();
            if (constraintCtx !== undefined) {
                const constraint = constraintCtx.accept(new constraintVisitor_1.ConstraintVisitor());
                builtinType.setConstraints([constraint]);
            }
            return builtinType;
        }
        const firstText = firstCtx.text;
        if (Number.isNaN(+firstText)) {
            if (childCount > 1) {
                return unimpl_1.todo();
            }
            return firstText;
        }
        return unimpl_1.todo();
    }
    defaultResult() {
        return unimpl_1.unimpl();
    }
}
exports.ObjIdComponentsVisitor = ObjIdComponentsVisitor;
//# sourceMappingURL=objIdComponentsVisitor.js.map