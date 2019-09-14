import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';

import { TerminalNode } from 'antlr4ts/tree/TerminalNode';
import { AdditionalElementSetSpecContext, ElementSetSpecsContext, RootElementSetSpecContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
import { ExtensionMarker } from '../classes/extensionMarker';
import { AdditionalElementSetSpecVisitor } from './additionalElementSetSpec';
import { IConstraint } from './elements';
import { RootElementSetSpecVisitor } from './rootElementSetSpec';

export type ElementSetSpec = Array<IConstraint | ExtensionMarker>;

/**
 * ANTLR4 grammar
 * ```
 * elementSetSpecs :
 *  rootElementSetSpec (COMMA ELLIPSIS (COMMA additionalElementSetSpec)?)?
 * ```
 */
export class ElementSetSpecsVisitor extends AbstractParseTreeVisitor<ElementSetSpec>
                                    implements ASN_3gppVisitor<ElementSetSpec> {
  public defaultResult(): ElementSetSpec {
    return [];
  }

  public visitChildren(elementSetSpecsCtx: ElementSetSpecsContext): ElementSetSpec {
    const elementSetSpecs: ElementSetSpec = [];
    const { children } = elementSetSpecsCtx;
    children.forEach((childCtx) => {
      if (childCtx instanceof RootElementSetSpecContext) {
        elementSetSpecs.splice(elementSetSpecs.length, 0, ...childCtx.accept(new RootElementSetSpecVisitor()));
      } else if (childCtx instanceof AdditionalElementSetSpecContext) {
        elementSetSpecs.splice(elementSetSpecs.length, 0, ...childCtx.accept(new AdditionalElementSetSpecVisitor()));
      } else if (childCtx instanceof TerminalNode) {
        if (childCtx.text === '...') {
          elementSetSpecs.push(new ExtensionMarker());
        }
      }
    });
    return elementSetSpecs;
  }
}
