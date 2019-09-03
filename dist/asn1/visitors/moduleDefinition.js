"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const moduleBody_1 = require("./moduleBody");
/**
 * ANTLR4 grammar
 * ```
 * moduleDefinition :  IDENTIFIER (L_BRACE (IDENTIFIER L_PARAN NUMBER R_PARAN)* R_BRACE)?
 *      DEFINITIONS_LITERAL
 *      tagDefault
 *      extensionDefault
 *      ASSIGN_OP
 *       BEGIN_LITERAL
 *      moduleBody
 *       END_LITERAL
 * ```
 */
class ModuleDefinitionVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    defaultResult() {
        return undefined;
    }
    visitChildren(moduleDefinitionCtx) {
        const { children } = moduleDefinitionCtx;
        const { length } = children;
        const definitiveIdentification = [];
        if (length > 8) {
            const definitiveObjIdComponentList = children.slice(2, length - 8);
            for (let i = 0; i < definitiveObjIdComponentList.length; i += 4) {
                const definitiveName = definitiveObjIdComponentList[i].text;
                const definitiveNumber = Number(definitiveObjIdComponentList[i + 2].text);
                definitiveIdentification.push({ definitiveName, definitiveNumber });
            }
        }
        const moduleName = children[0].text;
        const moduleBodyCtx = children[length - 2];
        const definition = moduleBodyCtx.accept(new moduleBody_1.ModuleBodyVisitor());
        markModuleName(definition, moduleName);
        const moduleDefinition = { moduleName, definition, definitiveIdentification };
        return moduleDefinition;
    }
}
exports.ModuleDefinitionVisitor = ModuleDefinitionVisitor;
function markModuleName(definition, moduleName) {
    const assignments = definition.assignments;
    // tslint:disable-next-line: forin
    for (const identifier in assignments) {
        assignments[identifier].moduleName = moduleName;
    }
}
