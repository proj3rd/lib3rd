import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';

import { NamedNumberContext, NamedNumberListContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
import { NamedNumberVisitor } from './namedNumber';

export interface INamedNumberList {
  [named: string]: number;
}

/**
 * ANTLR4 grammar
 * ```
 * namedNumberList : (namedNumber) (COMMA namedNumber)*
 * ```
 */
export class NamedNumberListVisitor extends AbstractParseTreeVisitor<INamedNumberList>
                                  implements ASN_3gppVisitor<INamedNumberList> {
  public defaultResult(): INamedNumberList {
    return undefined;
  }

  public visitChildren(namedNumberListCtx: NamedNumberListContext): INamedNumberList {
    const namedNumberList = {};
    const { children } = namedNumberListCtx;
    children
    .filter((childCtx) => childCtx instanceof NamedNumberContext)
    .forEach((namedNumberCtx) => {
      const { name, num } = namedNumberCtx.accept(new NamedNumberVisitor());
      namedNumberList[name] = num;
    });
    return namedNumberList;
  }
}
