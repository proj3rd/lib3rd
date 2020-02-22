import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';

import { AdditionalElementSetSpecContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
import { ElementSetSpecVisitor } from './elementSetSpec';
import { Unions } from './unions';

/**
 * ANTLR4 grammar
 * rootElementSetSpec : elementSetSpec
 */
export class AdditionalElementSetSpecVisitor extends AbstractParseTreeVisitor<Unions>
                                             implements ASN_3gppVisitor<Unions> {
  public defaultResult(): Unions {
    return undefined;
  }

  public visitChildren(additionalElementSetSpecCtx: AdditionalElementSetSpecContext): Unions {
    const elementSetSpec = additionalElementSetSpecCtx.children[0];
    return elementSetSpec.accept(new ElementSetSpecVisitor());
  }
}
