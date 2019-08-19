"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var assignmentList_1 = require("./assignmentList");
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
        var _a;
        var childCtx = moduleBodyCtx.children;
        var moduleBody = {
            exports: [],
            imports: {},
            assignments: {},
            constants: {},
        };
        if (childCtx) {
            moduleBody.exports = childCtx[0].accept(new exports_1.ExportsVisitor());
            moduleBody.imports = childCtx[1].accept(new imports_1.ImportsVisitor());
            (_a = childCtx[2].accept(new assignmentList_1.AssignmentListVisitor()), moduleBody.assignments = _a.assignments, moduleBody.constants = _a.constants);
        }
        return moduleBody;
    };
    return ModuleBodyVisitor;
}());
exports.ModuleBodyVisitor = ModuleBodyVisitor;
