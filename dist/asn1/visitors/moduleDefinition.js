"use strict";
exports.__esModule = true;
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
 *         ;
 * ```
 */
var ModuleDefinitionVisitor = /** @class */ (function () {
    function ModuleDefinitionVisitor() {
    }
    ModuleDefinitionVisitor.prototype.visitChildren = function (moduleDefinitionCtx) {
        var moduleName = moduleDefinitionCtx.children[0].getText();
        var definition = {};
        // TODO
        return { moduleName: moduleName, definition: definition };
    };
    return ModuleDefinitionVisitor;
}());
exports.ModuleDefinitionVisitor = ModuleDefinitionVisitor;
