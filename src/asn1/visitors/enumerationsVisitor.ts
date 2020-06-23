import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { EnumerationItem } from '../classes/enumeratedType';
import { ExtensionMarker } from '../classes/extensionMarker';
import {
  AdditionalEnumerationContext,
  EnumerationsContext,
  ExceptionSpecContext,
  RootEnumerationContext,
} from '../grammar/ASN_3gppParser';
import { ASN_3gppVisitor } from '../grammar/ASN_3gppVisitor';
import { unimpl } from './_devUtils';
import { AdditionalEnumerationVisitor } from './additionalEnumerationVisitor';
import { RootEnumerationVisitor } from './rootEnumerationVisitor';

/**
 * # Grammar
 * ```
 * enumerations: rootEnumeration (COMMA ELLIPSIS exceptionSpec? (COMMA additionalEnumeration)?)?
 * ```
 */
export class EnumerationsVisitor
  extends AbstractParseTreeVisitor<EnumerationItem[]>
  implements ASN_3gppVisitor<EnumerationItem[]> {
  public visitChildren(ctx: EnumerationsContext): EnumerationItem[] {
    const enumerationItems: EnumerationItem[] = [];
    for (let i = 0; i < ctx.childCount; i++) {
      const childCtx = ctx.getChild(i);
      if (childCtx instanceof RootEnumerationContext) {
        const rootEnumeration = childCtx.accept(new RootEnumerationVisitor());
        enumerationItems.push(...rootEnumeration);
      } else if (childCtx instanceof ExceptionSpecContext) {
        unimpl(ctx);
      } else if (childCtx instanceof AdditionalEnumerationContext) {
        const additionalEnumeration = childCtx.accept(
          new AdditionalEnumerationVisitor()
        );
        enumerationItems.push(...additionalEnumeration);
      } else {
        switch (childCtx.text) {
          case ',': {
            break;
          }
          case '...': {
            enumerationItems.push(ExtensionMarker.getInstance());
            break;
          }
          default: {
            throw Error(childCtx.text);
          }
        }
      }
    }
    return enumerationItems;
  }

  protected defaultResult(): EnumerationItem[] {
    return [];
  }
}
