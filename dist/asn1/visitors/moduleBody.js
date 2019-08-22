"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const assignmentList_1 = require("./assignmentList");
const exports_1 = require("./exports");
const imports_1 = require("./imports");
/**
 * ANTLR4 grammar
 * ```
 * moduleBody :  (exports imports assignmentList) ?
 * ```
 */
class ModuleBodyVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    defaultResult() {
        return { exports: [], imports: {}, assignments: {}, constants: {} };
    }
    visitChildren(moduleBodyCtx) {
        const childCtx = moduleBodyCtx.children;
        const moduleBody = {
            exports: [],
            imports: {},
            assignments: {},
            constants: {},
        };
        if (childCtx) {
            moduleBody.exports = childCtx[0].accept(new exports_1.ExportsVisitor());
            moduleBody.imports = childCtx[1].accept(new imports_1.ImportsVisitor());
            ({ assignments: moduleBody.assignments, constants: moduleBody.constants } =
                childCtx[2].accept(new assignmentList_1.AssignmentListVisitor()));
        }
        return moduleBody;
    }
}
exports.ModuleBodyVisitor = ModuleBodyVisitor;
