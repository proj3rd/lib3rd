import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';

import { log } from '../../utils/logging';
import { getLogWithAsn1 } from '../utils';

import { BitStringTypeContext, BuiltinTypeContext, ChoiceTypeContext,
         EnumeratedTypeContext, IntegerTypeContext, OctetStringTypeContext,
         SequenceOfTypeContext, SequenceTypeContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
import { AsnBoolean } from '../classes/asnBoolean';
import { BitString } from '../classes/bitString';
import { Choice } from '../classes/choice';
import { Enumerated } from '../classes/enumerated';
import { Integer } from '../classes/integer';
import { Null } from '../classes/null';
import { OctetString } from '../classes/octetString';
import { Sequence } from '../classes/sequence';
import { SequenceOf } from '../classes/sequenceOf';
import { BitStringTypeVisitor } from './bitStringType';
import { ChoiceTypeVisitor } from './choiceType';
import { EnumeratedTypeVisitor } from './enumeratedType';
import { IntegerTypeVisitor } from './integerType';
import { OctetStringTypeVisitor } from './octetStringType';
import { SequenceOfTypeVisitor } from './sequenceOfType';
import { SequenceTypeVisitor } from './sequenceType';

export type BuiltinType = AsnBoolean | BitString | Choice | Enumerated |
                          Integer | Null | OctetString | Sequence | SequenceOf;

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
export class BuiltinTypeVisitor extends AbstractParseTreeVisitor<BuiltinType> implements ASN_3gppVisitor<BuiltinType> {
  public defaultResult(): BuiltinType {
    return undefined;
  }

  public visitChildren(builtinTypeCtx: BuiltinTypeContext): BuiltinType {
    const childCtx = builtinTypeCtx.children[0];
    let builtinType: BuiltinType;
    if (childCtx instanceof BitStringTypeContext) {
      builtinType = childCtx.accept(new BitStringTypeVisitor());
    } else if (childCtx instanceof ChoiceTypeContext) {
      builtinType = childCtx.accept(new ChoiceTypeVisitor());
    } else if (childCtx instanceof EnumeratedTypeContext) {
      builtinType = childCtx.accept(new EnumeratedTypeVisitor());
    } else if (childCtx instanceof IntegerTypeContext) {
      builtinType = childCtx.accept(new IntegerTypeVisitor());
    } else if (childCtx instanceof OctetStringTypeContext) {
      builtinType = childCtx.accept(new OctetStringTypeVisitor());
    } else if (childCtx instanceof SequenceOfTypeContext) {
      builtinType = childCtx.accept(new SequenceOfTypeVisitor());
    } else if (childCtx instanceof SequenceTypeContext) {
      builtinType = childCtx.accept(new SequenceTypeVisitor());
    } else {
      switch (childCtx.text.toLowerCase()) {
        case 'boolean': {
          builtinType = new AsnBoolean();
          break;
        }
        case 'null': {
          builtinType = new Null();
          break;
        }
        default: {
          // TODO
          log.warn(getLogWithAsn1(childCtx, 'Not supported ASN1:'));
          break;
        }
      }
    }
    return builtinType;
  }
}
