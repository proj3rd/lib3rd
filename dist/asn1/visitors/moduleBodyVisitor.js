"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const unimpl_1 = require("unimpl");
const assignmentListVisitor_1 = require("./assignmentListVisitor");
const exportsVisitor_1 = require("./exportsVisitor");
const importsVisitor_1 = require("./importsVisitor");
/**
 * # Grammar
 * ```
 * moduleBody: (exports imports assignmentList)?
 * ```
 */
class ModuleBodyVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    visitChildren(ctx) {
        const exportsCtx = ctx.exports();
        const exports = exportsCtx === undefined ? null : exportsCtx.accept(new exportsVisitor_1.ExportsVisitor());
        const importsCtx = ctx.imports();
        const imports = importsCtx === undefined ? null : importsCtx.accept(new importsVisitor_1.ImportsVisitor());
        const assignmentListCtx = ctx.assignmentList();
        const assignments = assignmentListCtx === undefined
            ? []
            : assignmentListCtx.accept(new assignmentListVisitor_1.AssignmentListVisitor());
        return { exports, imports, assignments };
    }
    defaultResult() {
        return unimpl_1.unimpl();
    }
}
exports.ModuleBodyVisitor = ModuleBodyVisitor;
//# sourceMappingURL=moduleBodyVisitor.js.map