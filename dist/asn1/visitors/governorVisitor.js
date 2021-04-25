"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GovernorVisitor = void 0;
/* eslint-disable class-methods-use-this */
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const unimpl_1 = require("unimpl");
const asnTypeVisitor_1 = require("./asnTypeVisitor");
const definedObjectClassVisitor_1 = require("./definedObjectClassVisitor");
/**
 * # Grammar
 * ```
 * governor: asnType | definedObjectClass
 * ```
 */
class GovernorVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    visitChildren(ctx) {
        const asnTypeCtx = ctx.asnType();
        if (asnTypeCtx !== undefined) {
            return asnTypeCtx.accept(new asnTypeVisitor_1.AsnTypeVisitor());
        }
        const definedObjectClassCtx = ctx.definedObjectClass();
        if (definedObjectClassCtx !== undefined) {
            return definedObjectClassCtx.accept(new definedObjectClassVisitor_1.DefinedObjectClassVisitor());
        }
        return unimpl_1.unreach();
    }
    defaultResult() {
        return unimpl_1.unimpl();
    }
}
exports.GovernorVisitor = GovernorVisitor;
//# sourceMappingURL=governorVisitor.js.map