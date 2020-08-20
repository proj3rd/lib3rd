"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const definitiveIdentification_1 = require("../classes/definitiveIdentification");
const moduleDefinition_1 = require("../classes/moduleDefinition");
const extensionDefaultVisitor_1 = require("./extensionDefaultVisitor");
const moduleBodyVisitor_1 = require("./moduleBodyVisitor");
const tagDefaultVisitor_1 = require("./tagDefaultVisitor");
/**
 * # Grammar
 * ```
 * moduleDefinition: IDENTIFIER
 *   (L_BRACE (IDENTIFIER L_PARAN NUMBER R_PARAN)* R_BRACE)?
 *   DEFINITIONS_LITERAL
 *   tagDefault
 *   extensionDefault
 *   ASSIGN_OP BEGIN_LITERAL
 *   moduleBody
 *   END_LITERAL
 * ```
 */
class ModuleDefinitionVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    visitChildren(ctx) {
        const name = ctx.getChild(0).text;
        const definitiveIdentificationArr = [];
        if (ctx.childCount > 8) {
            const indexStart = 2;
            const indexStop = ctx.childCount - 8;
            for (let i = indexStart; i < indexStop; i += 4) {
                // tslint:disable-next-line: no-shadowed-variable
                const name = ctx.getChild(i).text;
                // tslint:disable-next-line: variable-name
                const number = ctx.getChild(i + 2).text;
                definitiveIdentificationArr.push({ name, number });
            }
        }
        const definitiveIdentification = new definitiveIdentification_1.DefinitiveIdentification(definitiveIdentificationArr);
        const tagDefault = ctx.tagDefault().accept(new tagDefaultVisitor_1.TagDefaultVisitor());
        const extensionDefault = ctx
            .extensionDefault()
            .accept(new extensionDefaultVisitor_1.ExtensionDefaultVisitor());
        const moduleBody = ctx.moduleBody().accept(new moduleBodyVisitor_1.ModuleBodyVisitor());
        return new moduleDefinition_1.ModuleDefinition(name, definitiveIdentification, tagDefault, extensionDefault, moduleBody);
    }
    defaultResult() {
        throw Error();
    }
}
exports.ModuleDefinitionVisitor = ModuleDefinitionVisitor;
//# sourceMappingURL=moduleDefinitionVisitor.js.map