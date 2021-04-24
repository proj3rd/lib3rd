/* eslint-disable class-methods-use-this */
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { unimpl } from 'unimpl';
import { BuiltinType } from '../classes/asnType';
import { BooleanType } from '../classes/booleanType';
import { NullType } from '../classes/nullType';
import {
  BitStringTypeContext,
  BuiltinTypeContext,
  CharacterStringTypeContext,
  ChoiceTypeContext,
  EnumeratedTypeContext,
  IntegerTypeContext,
  ObjectClassFieldTypeContext,
  ObjectIdentifierTypeContext,
  OctetStringTypeContext,
  SequenceOfTypeContext,
  SequenceTypeContext,
  SetOfTypeContext,
  SetTypeContext,
} from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';
import { BitStringTypeVisitor } from './bitStringTypeVisitor';
import { CharacterStringTypeVisitor } from './characterStringTypeVisitor';
import { ChoiceTypeVisitor } from './choiceTypeVisitor';
import { EnumeratedTypeVisitor } from './enumeratedTypeVisitor';
import { IntegerTypeVisitor } from './integerTypeVisitor';
import { ObjectClassFieldTypeVisitor } from './objectClassFieldTypeVisitor';
import { ObjectIdentifierTypeVisitor } from './objectIdentifierTypeVisitor';
import { OctetStringTypeVisitor } from './octetStringTypeVisitor';
import { SequenceOfTypeVisitor } from './sequenceOfTypeVisitor';
import { SequenceTypeVisitor } from './sequenceTypeVisitor';

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
export class BuiltinTypeVisitor extends AbstractParseTreeVisitor<BuiltinType>
  implements grammar3rdVisitor<BuiltinType> {
  public visitChildren(ctx: BuiltinTypeContext): BuiltinType {
    const firstCtx = ctx.getChild(0);
    if (firstCtx instanceof OctetStringTypeContext) {
      return firstCtx.accept(new OctetStringTypeVisitor());
    } if (firstCtx instanceof BitStringTypeContext) {
      return firstCtx.accept(new BitStringTypeVisitor());
    } if (firstCtx instanceof ChoiceTypeContext) {
      return firstCtx.accept(new ChoiceTypeVisitor());
    } if (firstCtx instanceof EnumeratedTypeContext) {
      return firstCtx.accept(new EnumeratedTypeVisitor());
    } if (firstCtx instanceof IntegerTypeContext) {
      return firstCtx.accept(new IntegerTypeVisitor());
    } if (firstCtx instanceof SequenceTypeContext) {
      return firstCtx.accept(new SequenceTypeVisitor());
    } if (firstCtx instanceof SequenceOfTypeContext) {
      return firstCtx.accept(new SequenceOfTypeVisitor());
    } if (firstCtx instanceof SetTypeContext) {
      return unimpl(ctx.text);
    } if (firstCtx instanceof SetOfTypeContext) {
      return unimpl(ctx.text);
    } if (firstCtx instanceof ObjectIdentifierTypeContext) {
      return firstCtx.accept(new ObjectIdentifierTypeVisitor());
    } if (firstCtx instanceof ObjectClassFieldTypeContext) {
      return firstCtx.accept(new ObjectClassFieldTypeVisitor());
    } if (firstCtx instanceof CharacterStringTypeContext) {
      return firstCtx.accept(new CharacterStringTypeVisitor());
    }
    switch (ctx.text) {
      case 'BOOLEAN': {
        return new BooleanType();
      }
      case 'NULL': {
        return new NullType();
      }
      default: {
        throw Error();
      }
    }
  }

  protected defaultResult(): BuiltinType {
    return new NullType();
  }
}
