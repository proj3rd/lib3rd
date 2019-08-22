"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const logging_1 = require("../../utils/logging");
const utils_1 = require("../utils");
/**
 * ANTLR4 grammar
 * ```
 * versionNumber  :  (NUMBER  COLON )?
 * ```
 */
class VersionNumberVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    defaultResult() {
        return null;
    }
    visitChildren(versionNumberCtx) {
        const childCtxes = versionNumberCtx.children;
        if (childCtxes) {
            logging_1.log.warn(utils_1.getLogWithAsn1(versionNumberCtx, 'VersionNumber not supported:'));
        }
        return null;
    }
}
exports.VersionNumberVisitor = VersionNumberVisitor;
