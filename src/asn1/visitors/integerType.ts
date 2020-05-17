import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';

import { IntegerTypeContext, NamedNumberListContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';

import { Integer } from '../classes/integer';
import { INamedNumberList, NamedNumberListVisitor } from './namedNumberList';

/**
 * ANTLR4 grammar
 * ```
 * integerType:INTEGER_LITERAL  (L_BRACE namedNumberList R_BRACE)?
 * ```
 */
export class IntegerTypeVisitor extends AbstractParseTreeVisitor<Integer> implements ASN_3gppVisitor<Integer> {
  public defaultResult(): Integer {
    return undefined;
  }

  public visitChildren(integerTypeCtx: IntegerTypeContext): Integer {
    let namedNumberList: INamedNumberList;
    const { children } = integerTypeCtx;
    const namedNumberListCtx = children[2];
    if (namedNumberListCtx && namedNumberListCtx instanceof NamedNumberListContext) {
      namedNumberList = namedNumberListCtx.accept(new NamedNumberListVisitor());
    }
    return new Integer(namedNumberList);
  }
}
