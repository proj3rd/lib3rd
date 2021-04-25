"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReferencedTypeVisitor = void 0;
/* eslint-disable class-methods-use-this */
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const typeReference_1 = require("../classes/typeReference");
const definedTypeVisitor_1 = require("./definedTypeVisitor");
/**
 * # Grammar
 * ```
 * referencedType: definedType
 * ```
 */
class ReferencedTypeVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    visitChildren(ctx) {
        const definedTypeCtx = ctx.definedType();
        return definedTypeCtx.accept(new definedTypeVisitor_1.DefinedTypeVisitor());
    }
    defaultResult() {
        return new typeReference_1.TypeReference('');
    }
}
exports.ReferencedTypeVisitor = ReferencedTypeVisitor;
//# sourceMappingURL=referencedTypeVisitor.js.map