"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const logging_1 = require("../../utils/logging");
const utils_1 = require("../utils");
const ASN_3gppParser_1 = require("../ASN_3gppParser");
const extensionAdditionAlternativesGroup_1 = require("./extensionAdditionAlternativesGroup");
const namedType_1 = require("./namedType");
/**
 * ANTR4 grammar
 * ```
 * extensionAdditionAlternative  :  extensionAdditionAlternativesGroup | namedType
 * ```
 */
class ExtensionAdditionAlternativeVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    defaultResult() {
        return undefined;
    }
    visitChildren(extensionAdditionAlternativeCtx) {
        let extensionAdditionAlternative;
        const childCtx = extensionAdditionAlternativeCtx.children[0];
        if (childCtx instanceof ASN_3gppParser_1.ExtensionAdditionAlternativesGroupContext) {
            extensionAdditionAlternative = childCtx.accept(new extensionAdditionAlternativesGroup_1.ExtensionAdditionAlternativesGroupVisitor());
        }
        else if (childCtx instanceof ASN_3gppParser_1.NamedTypeContext) {
            extensionAdditionAlternative = childCtx.accept(new namedType_1.NamedTypeVisitor());
        }
        else {
            logging_1.log.warn(utils_1.getLogWithAsn1(extensionAdditionAlternativeCtx, 'Not supported ASN1:'));
        }
        return extensionAdditionAlternative;
    }
}
exports.ExtensionAdditionAlternativeVisitor = ExtensionAdditionAlternativeVisitor;
