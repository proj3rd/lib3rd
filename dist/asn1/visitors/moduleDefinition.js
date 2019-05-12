"use strict";
exports.__esModule = true;
var logging_1 = require("../../utils/logging");
var utils_1 = require("../utils");
var moduleBody_1 = require("./moduleBody");
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
var ModuleDefinitionVisitor = /** @class */ (function () {
    function ModuleDefinitionVisitor() {
    }
    ModuleDefinitionVisitor.prototype.visitChildren = function (moduleDefinitionCtx) {
        var childCtxes = moduleDefinitionCtx.children;
        var length = childCtxes.length;
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
        var moduleName = childCtxes[0].getText();
        var moduleBodyCtx = childCtxes[length - 2];
        var definition = moduleBodyCtx.accept(new moduleBody_1.ModuleBodyVisitor());
        markModuleName(definition, moduleName);
        return { moduleName: moduleName, definition: definition };
    };
    return ModuleDefinitionVisitor;
}());
exports.ModuleDefinitionVisitor = ModuleDefinitionVisitor;
function markModuleName(definition, moduleName) {
    var assignments = definition.assignments;
    // tslint:disable-next-line: forin
    for (var identifier in assignments) {
        assignments[identifier].moduleName = moduleName;
    }
}
