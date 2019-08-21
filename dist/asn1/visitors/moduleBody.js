"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
var assignmentList_1 = require("./assignmentList");
var exports_1 = require("./exports");
var imports_1 = require("./imports");
/**
 * ANTLR4 grammar
 * ```
 * moduleBody :  (exports imports assignmentList) ?
 * ```
 */
var ModuleBodyVisitor = /** @class */ (function (_super) {
    __extends(ModuleBodyVisitor, _super);
    function ModuleBodyVisitor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ModuleBodyVisitor.prototype.defaultResult = function () {
        return { exports: [], imports: {}, assignments: {}, constants: {} };
    };
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
}(AbstractParseTreeVisitor_1.AbstractParseTreeVisitor));
exports.ModuleBodyVisitor = ModuleBodyVisitor;
