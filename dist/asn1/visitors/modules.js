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
var moduleDefinition_1 = require("./moduleDefinition");
/**
 * ANTLR4 grammar
 * ```
 * modules: moduleDefinition+;
 * ```
 */
var ModulesVisitor = /** @class */ (function (_super) {
    __extends(ModulesVisitor, _super);
    function ModulesVisitor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ModulesVisitor.prototype.defaultResult = function () {
        return {};
    };
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
}(AbstractParseTreeVisitor_1.AbstractParseTreeVisitor));
exports.ModulesVisitor = ModulesVisitor;
