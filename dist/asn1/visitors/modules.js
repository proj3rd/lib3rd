"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const moduleDefinition_1 = require("./moduleDefinition");
/**
 * ANTLR4 grammar
 * ```
 * modules: moduleDefinition+;
 * ```
 */
class ModulesVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    defaultResult() {
        return {};
    }
    visitChildren(modulesCtx) {
        const modules = {};
        for (const moduleDefinitionCtx of modulesCtx.children) {
            const { moduleName, definition } = moduleDefinitionCtx.accept(new moduleDefinition_1.ModuleDefinitionVisitor());
            modules[moduleName] = definition;
        }
        return modules;
    }
}
exports.ModulesVisitor = ModulesVisitor;
