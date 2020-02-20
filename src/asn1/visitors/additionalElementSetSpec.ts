import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';

import { AdditionalElementSetSpecContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
import { ElementsTypes } from './elements';
import { ElementSetSpecVisitor } from './elementSetSpec';

/**
 * ANTLR4 grammar
 * rootElementSetSpec : elementSetSpec
 */
export class AdditionalElementSetSpecVisitor extends AbstractParseTreeVisitor<ElementsTypes[]>
                                             implements ASN_3gppVisitor<ElementsTypes[]> {
  public defaultResult(): ElementsTypes[] {
    return undefined;
  }

  public visitChildren(additionalElementSetSpecCtx: AdditionalElementSetSpecContext): ElementsTypes[] {
    const elementSetSpec = additionalElementSetSpecCtx.children[0];
    return elementSetSpec.accept(new ElementSetSpecVisitor());
  }
}
