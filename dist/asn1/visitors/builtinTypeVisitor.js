"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const unimpl_1 = require("unimpl");
const booleanType_1 = require("../classes/booleanType");
const nullType_1 = require("../classes/nullType");
const ASN_3gppParser_1 = require("../grammar/ASN_3gppParser");
const bitStringTypeVisitor_1 = require("./bitStringTypeVisitor");
const characterStringTypeVisitor_1 = require("./characterStringTypeVisitor");
const choiceTypeVisitor_1 = require("./choiceTypeVisitor");
const enumeratedTypeVisitor_1 = require("./enumeratedTypeVisitor");
const integerTypeVisitor_1 = require("./integerTypeVisitor");
const objectClassFieldTypeVisitor_1 = require("./objectClassFieldTypeVisitor");
const objectIdentifierTypeVisitor_1 = require("./objectIdentifierTypeVisitor");
const octetStringTypeVisitor_1 = require("./octetStringTypeVisitor");
const sequenceOfTypeVisitor_1 = require("./sequenceOfTypeVisitor");
const sequenceTypeVisitor_1 = require("./sequenceTypeVisitor");
/**
 * # Grammar
 * ```
 * builtinType:
 *   octetStringType
 * | bitStringType
 * | characterStringType
 * | choiceType
 * | enumeratedType
 * | integerType
 * | sequenceType
 * | sequenceOfType
 * | setType
 * | setOfType
 * | objectidentifiertype
 * | objectClassFieldType
 * | BOOLEAN_LITERAL
 * | NULL_LITERAL
 * ```
 */
class BuiltinTypeVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    visitChildren(ctx) {
        const firstCtx = ctx.getChild(0);
        if (firstCtx instanceof ASN_3gppParser_1.OctetStringTypeContext) {
            return firstCtx.accept(new octetStringTypeVisitor_1.OctetStringTypeVisitor());
        }
        else if (firstCtx instanceof ASN_3gppParser_1.BitStringTypeContext) {
            return firstCtx.accept(new bitStringTypeVisitor_1.BitStringTypeVisitor());
        }
        else if (firstCtx instanceof ASN_3gppParser_1.ChoiceTypeContext) {
            return firstCtx.accept(new choiceTypeVisitor_1.ChoiceTypeVisitor());
        }
        else if (firstCtx instanceof ASN_3gppParser_1.EnumeratedTypeContext) {
            return firstCtx.accept(new enumeratedTypeVisitor_1.EnumeratedTypeVisitor());
        }
        else if (firstCtx instanceof ASN_3gppParser_1.IntegerTypeContext) {
            return firstCtx.accept(new integerTypeVisitor_1.IntegerTypeVisitor());
        }
        else if (firstCtx instanceof ASN_3gppParser_1.SequenceTypeContext) {
            return firstCtx.accept(new sequenceTypeVisitor_1.SequenceTypeVisitor());
        }
        else if (firstCtx instanceof ASN_3gppParser_1.SequenceOfTypeContext) {
            return firstCtx.accept(new sequenceOfTypeVisitor_1.SequenceOfTypeVisitor());
        }
        else if (firstCtx instanceof ASN_3gppParser_1.SetTypeContext) {
            return unimpl_1.unimpl(ctx.text);
        }
        else if (firstCtx instanceof ASN_3gppParser_1.SetOfTypeContext) {
            return unimpl_1.unimpl(ctx.text);
        }
        else if (firstCtx instanceof ASN_3gppParser_1.ObjectidentifiertypeContext) {
            return firstCtx.accept(new objectIdentifierTypeVisitor_1.ObjectidentifiertypeVisitor());
        }
        else if (firstCtx instanceof ASN_3gppParser_1.ObjectClassFieldTypeContext) {
            return firstCtx.accept(new objectClassFieldTypeVisitor_1.ObjectClassFieldTypeVisitor());
        }
        else if (firstCtx instanceof ASN_3gppParser_1.CharacterStringTypeContext) {
            return firstCtx.accept(new characterStringTypeVisitor_1.CharacterStringTypeVisitor());
        }
        else {
            switch (ctx.text) {
                case 'BOOLEAN': {
                    return booleanType_1.BooleanType.getInstance();
                }
                case 'NULL': {
                    return nullType_1.NullType.getInstance();
                }
                default: {
                    throw Error();
                }
            }
        }
    }
    defaultResult() {
        return nullType_1.NullType.getInstance();
    }
}
exports.BuiltinTypeVisitor = BuiltinTypeVisitor;
//# sourceMappingURL=builtinTypeVisitor.js.map