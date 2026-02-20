"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModulesVisitor = void 0;
/* eslint-disable class-methods-use-this */
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const modules_1 = require("../classes/modules");
const moduleDefinitionVisitor_1 = require("./moduleDefinitionVisitor");
/**
 * # Grammar
 * ```
 * modules: moduleDefinition
 * ```
 */
class ModulesVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    visitChildren(ctx) {
        const children = ctx.moduleDefinition();
        const modules = children.map((child) => child.accept(new moduleDefinitionVisitor_1.ModuleDefinitionVisitor()));
        return new modules_1.Modules(modules);
    }
    defaultResult() {
        return new modules_1.Modules();
    }
}
exports.ModulesVisitor = ModulesVisitor;
//# sourceMappingURL=modulesVisitor.js.map