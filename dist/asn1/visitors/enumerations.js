"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
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
        const rootEnumerationCtx = childCtxes[0];
        const enumerations = rootEnumerationCtx.accept(new rootEnumeration_1.RootEnumerationVisitor());
        const exceptionSpecCtx = childCtxes[3] && childCtxes[3] instanceof ASN_3gppParser_1.ExceptionSpecContext ? childCtxes[3] : null;
        if (exceptionSpecCtx) {
            // TODO
            logging_1.log.warn(utils_1.getLogWithAsn1(enumerationsCtx, 'ExceptionSpec not supported:'));
        }
        const lastCtx = childCtxes[childCtxes.length - 1];
        const additionalEnumerationCtx = lastCtx instanceof ASN_3gppParser_1.AdditionalEnumerationContext ? lastCtx : null;
        if (additionalEnumerationCtx) {
            const additionalEnumeration = additionalEnumerationCtx.accept(new additionalEnumeration_1.AdditionalEnumerationVisitor());
            enumerations.splice(enumerations.length, 0, new extensionMarker_1.ExtensionMarker(), ...additionalEnumeration);
        }
        return enumerations;
    }
}
exports.EnumerationsVisitor = EnumerationsVisitor;
