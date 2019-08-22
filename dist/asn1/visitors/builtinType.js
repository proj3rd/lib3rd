"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const logging_1 = require("../../utils/logging");
const utils_1 = require("../utils");
const ASN_3gppParser_1 = require("../ASN_3gppParser");
const asnBoolean_1 = require("../classes/asnBoolean");
const null_1 = require("../classes/null");
const bitStringType_1 = require("./bitStringType");
const choiceType_1 = require("./choiceType");
const enumeratedType_1 = require("./enumeratedType");
const integerType_1 = require("./integerType");
const octetStringType_1 = require("./octetStringType");
const sequenceOfType_1 = require("./sequenceOfType");
const sequenceType_1 = require("./sequenceType");
/**
 * ANTLR4 grammar
 * builtinType :
 *    octetStringType
 *  | bitStringType
 *  | choiceType
 *  | enumeratedType
 *  | integerType
 *  | sequenceType
 *  | sequenceOfType
 *  | setType
 *  | setOfType
 *  | objectidentifiertype
 *  | objectClassFieldType
 *  | BOOLEAN_LITERAL
 *  | NULL_LITERAL
 */
class BuiltinTypeVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    defaultResult() {
        return undefined;
    }
    visitChildren(builtinTypeCtx) {
        const childCtx = builtinTypeCtx.children[0];
        let builtinType;
        if (childCtx instanceof ASN_3gppParser_1.BitStringTypeContext) {
            builtinType = childCtx.accept(new bitStringType_1.BitStringTypeVisitor());
        }
        else if (childCtx instanceof ASN_3gppParser_1.ChoiceTypeContext) {
            builtinType = childCtx.accept(new choiceType_1.ChoiceTypeVisitor());
        }
        else if (childCtx instanceof ASN_3gppParser_1.EnumeratedTypeContext) {
            builtinType = childCtx.accept(new enumeratedType_1.EnumeratedTypeVisitor());
        }
        else if (childCtx instanceof ASN_3gppParser_1.IntegerTypeContext) {
            builtinType = childCtx.accept(new integerType_1.IntegerTypeVisitor());
        }
        else if (childCtx instanceof ASN_3gppParser_1.OctetStringTypeContext) {
            builtinType = childCtx.accept(new octetStringType_1.OctetStringTypeVisitor());
        }
        else if (childCtx instanceof ASN_3gppParser_1.SequenceOfTypeContext) {
            builtinType = childCtx.accept(new sequenceOfType_1.SequenceOfTypeVisitor());
        }
        else if (childCtx instanceof ASN_3gppParser_1.SequenceTypeContext) {
            builtinType = childCtx.accept(new sequenceType_1.SequenceTypeVisitor());
        }
        else {
            switch (childCtx.text.toLowerCase()) {
                case 'boolean': {
                    builtinType = new asnBoolean_1.AsnBoolean();
                    break;
                }
                case 'null': {
                    builtinType = new null_1.Null();
                    break;
                }
                default: {
                    // TODO
                    logging_1.log.warn(utils_1.getLogWithAsn1(childCtx, 'Not supported ASN1:'));
                    break;
                }
            }
        }
        return builtinType;
    }
}
exports.BuiltinTypeVisitor = BuiltinTypeVisitor;
