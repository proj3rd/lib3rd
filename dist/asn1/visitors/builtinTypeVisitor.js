"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BuiltinTypeVisitor = void 0;
/* eslint-disable class-methods-use-this */
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const unimpl_1 = require("../../utils/unimpl");
const booleanType_1 = require("../classes/booleanType");
const nullType_1 = require("../classes/nullType");
const grammar3rdParser_1 = require("../grammar/grammar3rdParser");
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
        if (firstCtx instanceof grammar3rdParser_1.OctetStringTypeContext) {
            return firstCtx.accept(new octetStringTypeVisitor_1.OctetStringTypeVisitor());
        }
        if (firstCtx instanceof grammar3rdParser_1.BitStringTypeContext) {
            return firstCtx.accept(new bitStringTypeVisitor_1.BitStringTypeVisitor());
        }
        if (firstCtx instanceof grammar3rdParser_1.ChoiceTypeContext) {
            return firstCtx.accept(new choiceTypeVisitor_1.ChoiceTypeVisitor());
        }
        if (firstCtx instanceof grammar3rdParser_1.EnumeratedTypeContext) {
            return firstCtx.accept(new enumeratedTypeVisitor_1.EnumeratedTypeVisitor());
        }
        if (firstCtx instanceof grammar3rdParser_1.IntegerTypeContext) {
            return firstCtx.accept(new integerTypeVisitor_1.IntegerTypeVisitor());
        }
        if (firstCtx instanceof grammar3rdParser_1.SequenceTypeContext) {
            return firstCtx.accept(new sequenceTypeVisitor_1.SequenceTypeVisitor());
        }
        if (firstCtx instanceof grammar3rdParser_1.SequenceOfTypeContext) {
            return firstCtx.accept(new sequenceOfTypeVisitor_1.SequenceOfTypeVisitor());
        }
        if (firstCtx instanceof grammar3rdParser_1.SetTypeContext) {
            return unimpl_1.unimpl(ctx.text);
        }
        if (firstCtx instanceof grammar3rdParser_1.SetOfTypeContext) {
            return unimpl_1.unimpl(ctx.text);
        }
        if (firstCtx instanceof grammar3rdParser_1.ObjectIdentifierTypeContext) {
            return firstCtx.accept(new objectIdentifierTypeVisitor_1.ObjectidentifiertypeVisitor());
        }
        if (firstCtx instanceof grammar3rdParser_1.ObjectClassFieldTypeContext) {
            return firstCtx.accept(new objectClassFieldTypeVisitor_1.ObjectClassFieldTypeVisitor());
        }
        if (firstCtx instanceof grammar3rdParser_1.CharacterStringTypeContext) {
            return firstCtx.accept(new characterStringTypeVisitor_1.CharacterStringTypeVisitor());
        }
        switch (ctx.text) {
            case 'BOOLEAN': {
                return new booleanType_1.BooleanType();
            }
            case 'NULL': {
                return new nullType_1.NullType();
            }
            default: {
                throw Error();
            }
        }
    }
    defaultResult() {
        return new nullType_1.NullType();
    }
}
exports.BuiltinTypeVisitor = BuiltinTypeVisitor;
//# sourceMappingURL=builtinTypeVisitor.js.map