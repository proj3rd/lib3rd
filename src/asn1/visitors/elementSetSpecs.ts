import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';

import { log } from '../../utils/logging';
import { getLogWithAsn1 } from '../utils';

import { ElementSetSpecsContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
import { IConstraint } from './elements';
import { RootElementSetSpecVisitor } from './rootElementSetSpec';

/**
 * ANTLR4 grammar
 * ```
 * elementSetSpecs :
 *  rootElementSetSpec (COMMA ELLIPSIS (COMMA additionalElementSetSpec)?)?
 * ```
 */
export class ElementSetSpecsVisitor extends AbstractParseTreeVisitor<IConstraint>
                                    implements ASN_3gppVisitor<IConstraint> {
  public defaultResult(): IConstraint {
    return undefined;
  }

  public visitChildren(elementSetSpecsCtx: ElementSetSpecsContext): IConstraint /* TODO */ {
    const childCtxes = elementSetSpecsCtx.children;
    const rootElementSetSpecCtx = childCtxes[0];
    const elementSetSpecs = rootElementSetSpecCtx.accept(new RootElementSetSpecVisitor());
    if (childCtxes.length > 3) {
      log.warn(getLogWithAsn1(elementSetSpecsCtx, 'AdditionalElementSetSpec not supported:'));
    } else if (childCtxes.length > 1) {
      log.warn(getLogWithAsn1(elementSetSpecsCtx, 'Extension marker not supported:'));
    }
    return elementSetSpecs;
  }
}
