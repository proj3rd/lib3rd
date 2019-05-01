import { log } from '../../utils/logging';
import { getLogWithAsn1 } from '../utils';

import { DefinedType } from '../classes/definedType';

/**
 * ANTLR4 grammar
 * ```
 * definedType :
 * IDENTIFIER (DOT IDENTIFIER)? actualParameterList?
 * ```
 */
export class DefinedTypeVisitor {
  public visitChildren(definedTypeCtx: any): any /* TODO */ {
    const childCtxes = definedTypeCtx.children;
    const definedType = new DefinedType();
    switch (childCtxes.length) {
      case 1: {
        // ITENDIFIER
        definedType.typeReference = childCtxes[0].getText();
      }
      case 2: {
        // ITENDIFIER actualParameterList?
        if (childCtxes.length === 2) {
          // TODO
          log.warn(getLogWithAsn1(definedTypeCtx, 'Parameterized[ValueSet]Type not supported:'));
        }
        break;
      }

      case 3: {
        // IDENTIFIER DOT IDENTIFIER
        definedType.moduleReference = childCtxes[0].getText();
        definedType.typeReference = childCtxes[2].getText();
      }
      case 4: {
        // IDENTIFIER DOT IDENTIFIER actualParameterList?
        if (childCtxes.length === 4) {
          // TODO
          log.warn(getLogWithAsn1(definedTypeCtx, 'ExternalTypeReference with params not supported:'));
        }
        break;
      }
      default: {
        log.warn(getLogWithAsn1(definedTypeCtx, 'Not supported ASN1:'));
        return null;
        break;
      }
    }
    // TODO
    return definedType;
  }
}
