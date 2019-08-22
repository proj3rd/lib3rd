"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const logging_1 = require("../../utils/logging");
const utils_1 = require("../utils");
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
        return { moduleName: undefined, definition: undefined };
    }
    visitChildren(moduleDefinitionCtx) {
        const { children: childCtxes } = moduleDefinitionCtx;
        const { length } = childCtxes;
        if (length > 8) {
            /**
             * TODO: matches to (L_BRACE (IDENTIFIER L_PARAN NUMBER R_PARAN)* R_BRACE)?
             * S1AP-PDU-Contents {
             *   itu-t (0) identified-organization (4) etsi (0) mobileDomain (0)
             *   eps-Access (21) modules (3) s1ap (1) version1 (1) s1ap-PDU-Contents (1) }
             * DEFINITIONS AUTOMATIC TAGS ::= ...
             */
            logging_1.log.warn(utils_1.getLogWithAsn1(moduleDefinitionCtx, 'DefinitiveIdentification not supported:'));
        }
        const moduleName = childCtxes[0].text;
        const moduleBodyCtx = childCtxes[length - 2];
        const definition = moduleBodyCtx.accept(new moduleBody_1.ModuleBodyVisitor());
        markModuleName(definition, moduleName);
        return { moduleName, definition };
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
