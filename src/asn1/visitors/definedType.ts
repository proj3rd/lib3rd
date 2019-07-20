import { log } from '../../utils/logging';
import { getContextName, getLogWithAsn1 } from '../utils';

import { DefinedType } from '../classes/definedType';

import { ActualParameterListVisitor } from './actualParameterList';

/**
 * ANTLR4 grammar
 * ```
 * definedType :
 * IDENTIFIER (DOT IDENTIFIER)? actualParameterList?
 * ```
 */
export class DefinedTypeVisitor {
  public visitChildren(definedTypeCtx: any): any /* TODO */ {
    const definedType = new DefinedType();
    const childCtxes: any[] = definedTypeCtx.children;
    childCtxes.forEach((childCtx) => {
      switch (getContextName(childCtx)) {
        case 'actualParameterList': {
          definedType.actualParameterList = childCtx.accept(new ActualParameterListVisitor());
          break;
        }
        case null: {
          const text = childCtx.getText();
          if (text !== '.') {
            if (!definedType.typeReference) {
              definedType.typeReference = text;
            } else {
              definedType.moduleReference = definedType.typeReference;
              definedType.typeReference = text;
            }
          }
          break;
        }
        default: {
          log.warn(getLogWithAsn1(definedTypeCtx, 'Not supported ASN.1'));
          break;
        }
      }
    });
    return definedType;
  }
}
