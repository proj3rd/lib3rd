import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';

import { RootElementSetSpecContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
import { IConstraint } from './elements';
import { ElementSetSpecVisitor } from './elementSetSpec';

/**
 * ANTLR4 grammar
 * rootElementSetSpec : elementSetSpec
 */
export class RootElementSetSpecVisitor extends AbstractParseTreeVisitor<IConstraint>
                                       implements ASN_3gppVisitor<IConstraint> {
  public defaultResult(): IConstraint {
    return undefined;
  }

  public visitChildren(rootElementSetSpecCtx: RootElementSetSpecContext): IConstraint {
    const elementSetSpec = rootElementSetSpecCtx.children[0];
    return elementSetSpec.accept(new ElementSetSpecVisitor());
  }
}
