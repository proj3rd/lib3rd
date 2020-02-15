import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';

import { log } from '../../utils/logging';
import { getLogWithAsn1 } from '../utils';

import { IntersectionElementsContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
import { ElementsTypes, ElementsVisitor } from './elements';

/**
 * ANTLR4 grammar
 * ```
 * intersectionElements : elements (exclusions)?
 * ```
 */
export class IntersectionElementsVisitor extends AbstractParseTreeVisitor<ElementsTypes>
                                         implements ASN_3gppVisitor<ElementsTypes> {
  public defaultResult(): ElementsTypes {
    return undefined;
  }

  public visitChildren(intersectionElementsCtx: IntersectionElementsContext): ElementsTypes {
    const childCtxes = intersectionElementsCtx.children;
    const elementsCtx = childCtxes[0];
    const exclusionsCtx = childCtxes[1];
    const intersectionElements = elementsCtx.accept(new ElementsVisitor());
    if (exclusionsCtx) {
      log.warn(getLogWithAsn1(intersectionElementsCtx, 'Exclusions not supported:'));
    }
    return intersectionElements;
  }
}
