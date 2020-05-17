import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { UnionMarkContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
import { UnionMark } from '../classes/unionMark';
import { UnionMarkLiteral } from '../classes/unionMarkLiteral';
import { UnionMarkPipe } from '../classes/unionMarkPipe';

/**
 * ANTLR4 grammar
 * ```
 * unionMark  :  PIPE  |  UNION_LITERAL
 * ```
 */
export class UnionMarkVisitor extends AbstractParseTreeVisitor<UnionMark>
                                  implements ASN_3gppVisitor<UnionMark> {
  public defaultResult(): UnionMark {
    return undefined;
  }

  public visitChildren(unionMarkCtx: UnionMarkContext): UnionMark {
    switch (unionMarkCtx.text) {
      case '|':
        return new UnionMarkPipe();
      case 'UNION':
        return new UnionMarkLiteral();
    }
  }
}
