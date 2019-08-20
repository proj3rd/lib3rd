import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';

import { log } from '../../utils/logging';
import { getContextName, getLogWithAsn1 } from '../utils';

import { DefinedTypeContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
import { DefinedType } from '../classes/definedType';
import { ActualParameterListVisitor } from './actualParameterList';

/**
 * ANTLR4 grammar
 * ```
 * definedType :
 * IDENTIFIER (DOT IDENTIFIER)? actualParameterList?
 * ```
 */
export class DefinedTypeVisitor extends AbstractParseTreeVisitor<DefinedType> implements ASN_3gppVisitor<DefinedType> {
  public defaultResult(): DefinedType {
    return undefined;
  }

  public visitChildren(definedTypeCtx: DefinedTypeContext): DefinedType {
    const definedType = new DefinedType();
    const childCtxes = definedTypeCtx.children;
    childCtxes.forEach((childCtx) => {
      switch (getContextName(childCtx)) {
        case 'actualParameterList': {
          definedType.actualParameterList = childCtx.accept(new ActualParameterListVisitor());
          break;
        }
        case null: {
          const text = childCtx.text;
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
