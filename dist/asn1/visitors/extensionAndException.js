"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const logging_1 = require("../../utils/logging");
const utils_1 = require("../utils");
const extensionMarker_1 = require("../classes/extensionMarker");
/**
 * ANTLR4 grammar
 * ```
 * extensionAndException :  ELLIPSIS  exceptionSpec?
 * ```
 */
class ExtensionAndExceptionVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    defaultResult() {
        return [];
    }
    visitChildren(extensionAndExceptionCtx) {
        const extensionAndException = [new extensionMarker_1.ExtensionMarker()];
        const exceptionSpecCtx = extensionAndExceptionCtx.children[1];
        if (exceptionSpecCtx) {
            logging_1.log.warn(utils_1.getLogWithAsn1(extensionAndExceptionCtx, 'ExceptionSpec not supported:'));
        }
        return extensionAndException;
    }
}
exports.ExtensionAndExceptionVisitor = ExtensionAndExceptionVisitor;
