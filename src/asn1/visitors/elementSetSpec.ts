import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';

import { log } from '../../utils/logging';
import { getLogWithAsn1 } from '../utils';

import { ElementSetSpecContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
import { Unions, UnionsVisitor } from './unions';

/**
 * ANTLR4 grammar
 * ```
 * elementSetSpec : unions | ALL_LITERAL exclusions
 * ```
 */
export class ElementSetSpecVisitor extends AbstractParseTreeVisitor<Unions>
                                   implements ASN_3gppVisitor<Unions> {
  public defaultResult(): Unions {
    return undefined;
  }

  public visitChildren(elementSetSpecCtx: ElementSetSpecContext): Unions {
    const childCtxes = elementSetSpecCtx.children;
    let elementSetSpec: Unions;
    switch (childCtxes.length) {
      case 1: {
        elementSetSpec = childCtxes[0].accept(new UnionsVisitor());
        break;
      }
      case 2: {
        log.warn(getLogWithAsn1(elementSetSpecCtx, 'ALL EXCEPT not supported:'));
        break;
      }
      default: {
        log.warn(getLogWithAsn1(elementSetSpecCtx, 'Not suported ASN1:'));
        break;
      }
    }
    return elementSetSpec;
  }
}
