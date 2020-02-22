"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const logging_1 = require("../../utils/logging");
const ASN_3gppParser_1 = require("../ASN_3gppParser");
const fieldSpec_1 = require("../classes/fieldSpec");
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
        const firstChildCtx = childCtxes[0];
        if (!firstChildCtx || firstChildCtx instanceof ASN_3gppParser_1.TypeOptionalitySpecContext) {
            const typeOptionalitySpec = firstChildCtx.accept(new typeOptionalitySpec_1.TypeOptionalitySpecVisitor());
            return new fieldSpec_1.FieldSpec(reference, false, typeOptionalitySpec);
        }
        else {
            if (firstChildCtx instanceof ASN_3gppParser_1.AsnTypeContext) {
                const possiblyUniqueCtx = childCtxes[childCtxes.length - 2];
                const unique = possiblyUniqueCtx && possiblyUniqueCtx.text === 'UNIQUE' ? true : false;
                const lastChildCtx = childCtxes[childCtxes.length - 1];
                if (lastChildCtx && lastChildCtx instanceof ASN_3gppParser_1.ValueOptionalitySpecContext) {
                    const valueOptionalitySpec = lastChildCtx.accept(new valueOptionalitySpec_1.ValueOptionalitySpecVisitor());
                    return new fieldSpec_1.FieldSpec(reference, unique, valueOptionalitySpec);
                }
                else {
                    logging_1.log.warn(fieldSpecCtx);
                    logging_1.log.warn(new Error('Not supported ASN.1').stack);
                }
            }
            else {
                logging_1.log.warn(fieldSpecCtx);
                logging_1.log.warn(new Error('Not supported ASN.1').stack);
            }
        }
    }
}
exports.FieldSpecVisitor = FieldSpecVisitor;
