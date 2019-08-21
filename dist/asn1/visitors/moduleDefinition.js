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
var ModuleDefinitionVisitor = /** @class */ (function (_super) {
    __extends(ModuleDefinitionVisitor, _super);
    function ModuleDefinitionVisitor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ModuleDefinitionVisitor.prototype.defaultResult = function () {
        return { moduleName: undefined, definition: undefined };
    };
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
        var moduleName = childCtxes[0].text;
        var moduleBodyCtx = childCtxes[length - 2];
        var definition = moduleBodyCtx.accept(new moduleBody_1.ModuleBodyVisitor());
        markModuleName(definition, moduleName);
        return { moduleName: moduleName, definition: definition };
    };
    return ModuleDefinitionVisitor;
}(AbstractParseTreeVisitor_1.AbstractParseTreeVisitor));
exports.ModuleDefinitionVisitor = ModuleDefinitionVisitor;
function markModuleName(definition, moduleName) {
    var assignments = definition.assignments;
    // tslint:disable-next-line: forin
    for (var identifier in assignments) {
        assignments[identifier].moduleName = moduleName;
    }
}
