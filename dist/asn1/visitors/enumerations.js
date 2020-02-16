"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const TerminalNode_1 = require("antlr4ts/tree/TerminalNode");
const logging_1 = require("../../utils/logging");
const utils_1 = require("../utils");
const ASN_3gppParser_1 = require("../ASN_3gppParser");
const extensionMarker_1 = require("../classes/extensionMarker");
const additionalEnumeration_1 = require("./additionalEnumeration");
const rootEnumeration_1 = require("./rootEnumeration");
/**
 * ANTLR4 grammar
 * ```
 * rootEnumeration (COMMA   ELLIPSIS exceptionSpec? (COMMA   additionalEnumeration )?)?
 * ```
 */
class EnumerationsVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    defaultResult() {
        return [];
    }
    visitChildren(enumerationsCtx) {
        const childCtxes = enumerationsCtx.children;
        const enumerations = [];
        childCtxes.forEach((childCtx) => {
            if (childCtx instanceof ASN_3gppParser_1.RootEnumerationContext) {
                enumerations.splice(0, 0, ...childCtx.accept(new rootEnumeration_1.RootEnumerationVisitor()));
            }
            if (childCtx instanceof ASN_3gppParser_1.ExceptionSpecContext) {
                // TODO
                logging_1.log.warn(utils_1.getLogWithAsn1(enumerationsCtx, 'ExceptionSpec not supported:'));
            }
            if (childCtx instanceof ASN_3gppParser_1.AdditionalEnumerationContext) {
                enumerations.splice(enumerations.length, 0, ...childCtx.accept(new additionalEnumeration_1.AdditionalEnumerationVisitor()));
            }
            if (childCtx instanceof TerminalNode_1.TerminalNode) {
                if (childCtx.text === '...') {
                    enumerations.push(new extensionMarker_1.ExtensionMarker());
                }
            }
        });
        return enumerations;
    }
}
exports.EnumerationsVisitor = EnumerationsVisitor;
