"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjectClassDefnVisitor = void 0;
/* eslint-disable class-methods-use-this */
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const unimpl_1 = require("../../utils/unimpl");
const objectClass_1 = require("../classes/objectClass");
const fieldSpecVisitor_1 = require("./fieldSpecVisitor");
const withSyntaxSpecVisitor_1 = require("./withSyntaxSpecVisitor");
/**
 * # Grammar
 * ```
 * objectClassDefn: CLASS_LITERAL L_BRACE fieldSpec (COMMA fieldSpec)* R_BRACE withSyntaxSpec?
 * ```
 */
class ObjectClassDefnVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    visitChildren(ctx) {
        const fieldSpecCtxes = ctx.fieldSpec();
        const fieldSpecs = fieldSpecCtxes
            .map((fieldSpecCtx) => fieldSpecCtx.accept(new fieldSpecVisitor_1.FieldSpecVisitor()));
        const withSyntaxSpecCtx = ctx.withSyntaxSpec();
        const syntaxList = withSyntaxSpecCtx === undefined
            ? []
            : withSyntaxSpecCtx.accept(new withSyntaxSpecVisitor_1.WithSyntaxSpecVisitor());
        return new objectClass_1.ObjectClassDefinition(fieldSpecs, syntaxList);
    }
    defaultResult() {
        return unimpl_1.unimpl();
    }
}
exports.ObjectClassDefnVisitor = ObjectClassDefnVisitor;
//# sourceMappingURL=objectClassDefnVisitor.js.map