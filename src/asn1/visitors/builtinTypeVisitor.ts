import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { unimpl } from '../../_devUtils';
import { BuiltinType } from '../classes/asnType';
import { BooleanType } from '../classes/booleanType';
import { NullType } from '../classes/nullType';
import {
  BitStringTypeContext,
  BuiltinTypeContext,
  ChoiceTypeContext,
  EnumeratedTypeContext,
  IntegerTypeContext,
  ObjectClassFieldTypeContext,
  ObjectidentifiertypeContext,
  OctetStringTypeContext,
  SequenceOfTypeContext,
  SequenceTypeContext,
  SetOfTypeContext,
  SetTypeContext,
} from '../grammar/ASN_3gppParser';
import { ASN_3gppVisitor } from '../grammar/ASN_3gppVisitor';
import { BitStringTypeVisitor } from './bitStringTypeVisitor';
import { ChoiceTypeVisitor } from './choiceTypeVisitor';
import { EnumeratedTypeVisitor } from './enumeratedTypeVisitor';
import { IntegerTypeVisitor } from './integerTypeVisitor';
import { OctetStringTypeVisitor } from './octetStringTypeVisitor';
import { SequenceOfTypeVisitor } from './sequenceOfTypeVisitor';
import { SequenceTypeVisitor } from './sequenceTypeVisitor';

/**
 * # Grammar
 * ```
 * builtinType:
 *   octetStringType
 * | bitStringType
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
  implements ASN_3gppVisitor<BuiltinType> {
  public visitChildren(ctx: BuiltinTypeContext): BuiltinType {
    const firstCtx = ctx.getChild(0);
    if (firstCtx instanceof OctetStringTypeContext) {
      return firstCtx.accept(new OctetStringTypeVisitor());
    } else if (firstCtx instanceof BitStringTypeContext) {
      return firstCtx.accept(new BitStringTypeVisitor());
    } else if (firstCtx instanceof ChoiceTypeContext) {
      return firstCtx.accept(new ChoiceTypeVisitor());
    } else if (firstCtx instanceof EnumeratedTypeContext) {
      return firstCtx.accept(new EnumeratedTypeVisitor());
    } else if (firstCtx instanceof IntegerTypeContext) {
      return firstCtx.accept(new IntegerTypeVisitor());
    } else if (firstCtx instanceof SequenceTypeContext) {
      return firstCtx.accept(new SequenceTypeVisitor());
    } else if (firstCtx instanceof SequenceOfTypeContext) {
      return firstCtx.accept(new SequenceOfTypeVisitor());
    } else if (firstCtx instanceof SetTypeContext) {
      return unimpl(ctx.text);
    } else if (firstCtx instanceof SetOfTypeContext) {
      return unimpl(ctx.text);
    } else if (firstCtx instanceof ObjectidentifiertypeContext) {
      return unimpl(ctx.text);
    } else if (firstCtx instanceof ObjectClassFieldTypeContext) {
      return unimpl(ctx.text);
    } else {
      switch (ctx.text) {
        case 'BOOLEAN': {
          return BooleanType.getInstance();
        }
        case 'NULL': {
          return NullType.getInstance();
        }
        default: {
          throw Error();
        }
      }
    }
  }

  protected defaultResult(): BuiltinType {
    return NullType.getInstance();
  }
}
