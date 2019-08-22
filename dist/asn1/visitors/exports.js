"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const logging_1 = require("../../utils/logging");
const utils_1 = require("../utils");
/**
 * exports :   (EXPORTS_LITERAL symbolsExported SEMI_COLON
 *  |    EXPORTS_LITERAL ALL_LITERAL SEMI_COLON )?
 */
class ExportsVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    defaultResult() {
        return [];
    }
    visitChildren(exportsCtx) {
        const exports = [];
        if (exportsCtx.children) {
            logging_1.log.warn(utils_1.getLogWithAsn1(exportsCtx, 'Exports not supported:'));
        }
        return exports;
    }
}
exports.ExportsVisitor = ExportsVisitor;
