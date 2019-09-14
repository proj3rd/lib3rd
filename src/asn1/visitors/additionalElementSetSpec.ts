import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';

import { AdditionalElementSetSpecContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
import { IConstraint } from './elements';
import { ElementSetSpecVisitor } from './elementSetSpec';

/**
 * ANTLR4 grammar
 * rootElementSetSpec : elementSetSpec
 */
export class AdditionalElementSetSpecVisitor extends AbstractParseTreeVisitor<IConstraint[]>
                                             implements ASN_3gppVisitor<IConstraint[]> {
  public defaultResult(): IConstraint[] {
    return undefined;
  }

  public visitChildren(additionalElementSetSpecCtx: AdditionalElementSetSpecContext): IConstraint[] {
    const elementSetSpec = additionalElementSetSpecCtx.children[0];
    return elementSetSpec.accept(new ElementSetSpecVisitor());
  }
}
