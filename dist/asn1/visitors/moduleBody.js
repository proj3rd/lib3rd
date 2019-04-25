"use strict";
exports.__esModule = true;
var exports_1 = require("./exports");
var imports_1 = require("./imports");
/**
 * ANTLR4 grammar
 * ```
 * moduleBody :  (exports imports assignmentList) ?
 * ```
 */
var ModuleBodyVisitor = /** @class */ (function () {
    function ModuleBodyVisitor() {
    }
    ModuleBodyVisitor.prototype.visitChildren = function (moduleBodyCtx) {
        var childCtx = moduleBodyCtx.children;
        var moduleBody = {
            exports: [],
            imports: {},
            assignments: {},
            constants: {}
        };
        if (childCtx) {
            moduleBody.exports = childCtx[0].accept(new exports_1.ExportsVisitor());
            moduleBody.imports = childCtx[1].accept(new imports_1.ImportsVisitor());
            // TODO
            // ({assignments: moduleBody.assignments, constants: moduleBody.constants} =
            //   childCtx[2].accept(new AssignmentListVisitor()));
        }
        return moduleBody;
    };
    return ModuleBodyVisitor;
}());
exports.ModuleBodyVisitor = ModuleBodyVisitor;
