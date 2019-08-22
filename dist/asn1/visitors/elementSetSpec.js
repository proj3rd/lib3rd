"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const logging_1 = require("../../utils/logging");
const utils_1 = require("../utils");
const unions_1 = require("./unions");
/**
 * ANTLR4 grammar
 * ```
 * elementSetSpec : unions | ALL_LITERAL exclusions
 * ```
 */
class ElementSetSpecVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    defaultResult() {
        return undefined;
    }
    visitChildren(elementSetSpecCtx) {
        const childCtxes = elementSetSpecCtx.children;
        let elementSetSpec;
        switch (childCtxes.length) {
            case 1: {
                elementSetSpec = childCtxes[0].accept(new unions_1.UnionsVisitor());
                break;
            }
            case 2: {
                logging_1.log.warn(utils_1.getLogWithAsn1(elementSetSpecCtx, 'ALL EXCEPT not supported:'));
                break;
            }
            default: {
                logging_1.log.warn(utils_1.getLogWithAsn1(elementSetSpecCtx, 'Not suported ASN1:'));
                break;
            }
        }
        return elementSetSpec;
    }
}
exports.ElementSetSpecVisitor = ElementSetSpecVisitor;
