"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const logging_1 = require("../../utils/logging");
const ASN_3gppParser_1 = require("../ASN_3gppParser");
const fieldSpec_1 = require("../classes/fieldSpec");
const asnType_1 = require("./asnType");
const typeOptionalitySpec_1 = require("./typeOptionalitySpec");
const valueOptionalitySpec_1 = require("./valueOptionalitySpec");
/**
 * ANTLR4 grammar
 * ```
 * fieldSpec :
 * AMPERSAND IDENTIFIER
 * (
 *   typeOptionalitySpec?
 *  	| asnType (valueSetOptionalitySpec?  | UNIQUE_LITERAL? valueOptionalitySpec? )
 * | fieldName (OPTIONAL_LITERAL | (DEFAULT_LITERAL (valueSet | value)))?
 * | definedObjectClass (OPTIONAL_LITERAL | (DEFAULT_LITERAL (objectSet | object)))?
 * )
 * ```
 */
class FieldSpecVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    defaultResult() {
        return undefined;
    }
    visitChildren(fieldSpecCtx) {
        const [ampersand, identifier, ...childCtxes] = fieldSpecCtx.children;
        const reference = `${ampersand}${identifier}`;
        let type;
        let unique;
        let optionalitySpec;
        childCtxes.forEach((childCtx) => {
            if (childCtx instanceof ASN_3gppParser_1.TypeOptionalitySpecContext) {
                optionalitySpec = childCtx.accept(new typeOptionalitySpec_1.TypeOptionalitySpecVisitor());
            }
            else if (childCtx instanceof ASN_3gppParser_1.ValueSetOptionalitySpecContext) {
                logging_1.log.warn(childCtx);
                logging_1.log.warn(new Error('Not supported ASN.1').stack);
                return;
            }
            else if (childCtx instanceof ASN_3gppParser_1.AsnTypeContext) {
                type = childCtx.accept(new asnType_1.AsnTypeVisitor());
            }
            else if (childCtx instanceof ASN_3gppParser_1.ValueOptionalitySpecContext) {
                optionalitySpec = childCtx.accept(new valueOptionalitySpec_1.ValueOptionalitySpecVisitor());
            }
            else if (childCtx instanceof ASN_3gppParser_1.FieldNameContext) {
                logging_1.log.warn(childCtx);
                logging_1.log.warn(new Error('Not supported ASN.1').stack);
                return;
            }
            else if (childCtx instanceof ASN_3gppParser_1.ValueSetContext) {
                logging_1.log.warn(childCtx);
                logging_1.log.warn(new Error('Not supported ASN.1').stack);
                return;
            }
            else if (childCtx instanceof ASN_3gppParser_1.ValueContext) {
                logging_1.log.warn(childCtx);
                logging_1.log.warn(new Error('Not supported ASN.1').stack);
                return;
            }
            else if (childCtx instanceof ASN_3gppParser_1.DefinedObjectClassContext) {
                logging_1.log.warn(childCtx);
                logging_1.log.warn(new Error('Not supported ASN.1').stack);
                return;
            }
            else if (childCtx instanceof ASN_3gppParser_1.ObjectSetContext) {
                logging_1.log.warn(childCtx);
                logging_1.log.warn(new Error('Not supported ASN.1').stack);
                return;
            }
            else if (childCtx instanceof ASN_3gppParser_1.ObjectContext) {
                logging_1.log.warn(childCtx);
                logging_1.log.warn(new Error('Not supported ASN.1').stack);
                return;
            }
            else if (childCtx.text === 'UNIQUE') {
                unique = true;
            }
        });
        return new fieldSpec_1.FieldSpec(reference, type, unique, optionalitySpec);
    }
}
exports.FieldSpecVisitor = FieldSpecVisitor;
