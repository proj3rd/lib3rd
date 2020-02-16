import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';

import { log } from '../../utils/logging';
import { getLogWithAsn1 } from '../utils';

import { ElementSetSpecContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
import { ElementsTypes } from './elements';
import { UnionsVisitor } from './unions';

/**
 * ANTLR4 grammar
 * ```
 * elementSetSpec : unions | ALL_LITERAL exclusions
 * ```
 */
export class ElementSetSpecVisitor extends AbstractParseTreeVisitor<ElementsTypes[]>
                                   implements ASN_3gppVisitor<ElementsTypes[]> {
  public defaultResult(): ElementsTypes[] {
    return undefined;
  }

  public visitChildren(elementSetSpecCtx: ElementSetSpecContext): ElementsTypes[] {
    const childCtxes = elementSetSpecCtx.children;
    let elementSetSpec: ElementsTypes[];
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
