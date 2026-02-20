/* eslint-disable class-methods-use-this */
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { unimpl } from '../../utils/unimpl';
import { ExtensionMarker } from '../classes/extensionMarker';
import {
  AdditionalElementSetSpecContext,
  ElementSetSpecsContext,
  RootElementSetSpecContext,
} from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';
import { ElementSetSpecs } from '../types/elementSetSpecs';
import { AdditionalElementSetSpecVisitor } from './additionalElementSetSpecVisitor';
import { RootElementSetSpecVisitor } from './rootElementSetSpecVisitor';

/**
 * # Grammar
 * ```
 * elementSetSpecs: rootElementSetSpec (COMMA ELLIPSIS (COMMA additionalElementSetSpec)?)?
 * ```
 */
export class ElementSetSpecsVisitor
  extends AbstractParseTreeVisitor<ElementSetSpecs>
  implements grammar3rdVisitor<ElementSetSpecs> {
  public visitChildren(ctx: ElementSetSpecsContext): ElementSetSpecs {
    const elementSetSpecs: ElementSetSpecs = [];
    const { childCount } = ctx;
    for (let i = 0; i < childCount; i += 1) {
      const childCtx = ctx.getChild(i);
      if (childCtx instanceof RootElementSetSpecContext) {
        const rootElementSetSpec = childCtx.accept(
          new RootElementSetSpecVisitor(),
        );
        elementSetSpecs.push(rootElementSetSpec);
      } else if (childCtx instanceof AdditionalElementSetSpecContext) {
        const additionalElementSetSpec = childCtx.accept(
          new AdditionalElementSetSpecVisitor(),
        );
        elementSetSpecs.push(additionalElementSetSpec);
      } else {
        switch (childCtx.text) {
          case ',': {
            break;
          }
          case '...': {
            elementSetSpecs.push(ExtensionMarker.getInstance());
            break;
          }
          default: {
            throw Error();
          }
        }
      }
    }
    return elementSetSpecs;
  }

  protected defaultResult(): ElementSetSpecs {
    return unimpl();
  }
}
