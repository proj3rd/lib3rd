/* eslint-disable class-methods-use-this */
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { unimpl } from 'unimpl';
import { _ElementSetSpecs } from '../types';
import { ExtensionMarker } from '../classes/extensionMarker';
import {
  AdditionalElementSetSpecContext,
  ObjectSetSpecContext,
  RootElementSetSpecContext,
} from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';
import { AdditionalElementSetSpecVisitor } from './additionalElementSetSpecVisitor';
import { RootElementSetSpecVisitor } from './rootElementSetSpecVisitor';

/**
 * # Grammar
 * ```
 * objectSetSpec :
 *     rootElementSetSpec (COMMA ELLIPSIS (COMMA additionalElementSetSpec )?)?
 *   | ELLIPSIS (COMMA additionalElementSetSpec )?
 * ```
 */
export class ObjectSetSpecVisitor
  extends AbstractParseTreeVisitor<_ElementSetSpecs>
  implements grammar3rdVisitor<_ElementSetSpecs> {
  public visitChildren(ctx: ObjectSetSpecContext): _ElementSetSpecs {
    const elementSetSpecs: _ElementSetSpecs = [];
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
          case '...': {
            elementSetSpecs.push(ExtensionMarker.getInstance());
            break;
          }
          case ',': {
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

  protected defaultResult(): _ElementSetSpecs {
    return unimpl();
  }
}
