"use strict";
exports.__esModule = true;
var moduleDefinition_1 = require("./moduleDefinition");
/**
 * ANTLR4 grammar
 * ```
 * modules: moduleDefinition+;
 * ```
 */
var ModulesVisitor = /** @class */ (function () {
    function ModulesVisitor() {
    }
    ModulesVisitor.prototype.visitChildren = function (modulesCtx) {
        var modules = {};
        for (var _i = 0, _a = modulesCtx.children; _i < _a.length; _i++) {
            var moduleDefinitionCtx = _a[_i];
            var _b = moduleDefinitionCtx.accept(new moduleDefinition_1.ModuleDefinitionVisitor()), moduleName = _b.moduleName, definition = _b.definition;
            modules[moduleName] = definition;
        }
        return modules;
    };
    return ModulesVisitor;
}());
exports.ModulesVisitor = ModulesVisitor;
