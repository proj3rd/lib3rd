import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { TerminalNode } from 'antlr4ts/tree/TerminalNode';

import { log } from '../../utils/logging';
import { getLogWithAsn1 } from '../utils';

import { ActualParameterListContext, DefinedTypeContext } from '../ASN_3gppParser';
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
      if (childCtx instanceof ActualParameterListContext) {
        definedType.actualParameterList = childCtx.accept(new ActualParameterListVisitor());
      } else if (childCtx instanceof TerminalNode) {
        const text = childCtx.text;
        if (text !== '.') {
          if (!definedType.typeReference) {
            definedType.typeReference = text;
          } else {
            definedType.moduleReference = definedType.typeReference;
            definedType.typeReference = text;
          }
        }
      } else {
        log.warn(getLogWithAsn1(definedTypeCtx, 'Not supported ASN.1'));
      }
    });
    return definedType;
  }
}
