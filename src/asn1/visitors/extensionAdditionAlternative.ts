import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';

import { log } from '../../utils/logging';
import { getLogWithAsn1 } from '../utils';

import { ExtensionAdditionAlternativeContext, ExtensionAdditionAlternativesGroupContext,
         NamedTypeContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
import { ExtensionAdditionAlternativesGroup } from '../classes/extensionAdditionAlternativesGroup';
import { NamedType } from '../classes/namedType';
import { ExtensionAdditionAlternativesGroupVisitor } from './extensionAdditionAlternativesGroup';
import { NamedTypeVisitor } from './namedType';

export type ExtensionAdditionAlternative = ExtensionAdditionAlternativesGroup | NamedType;

/**
 * ANTR4 grammar
 * ```
 * extensionAdditionAlternative  :  extensionAdditionAlternativesGroup | namedType
 * ```
 */
export class ExtensionAdditionAlternativeVisitor extends AbstractParseTreeVisitor<ExtensionAdditionAlternative>
                                                 implements ASN_3gppVisitor<ExtensionAdditionAlternative> {
  public defaultResult(): ExtensionAdditionAlternative {
    return undefined;
  }

  public visitChildren(extensionAdditionAlternativeCtx: ExtensionAdditionAlternativeContext)
      : ExtensionAdditionAlternative {
    let extensionAdditionAlternative: ExtensionAdditionAlternative;
    const childCtx = extensionAdditionAlternativeCtx.children[0];
    if (childCtx instanceof ExtensionAdditionAlternativesGroupContext) {
      extensionAdditionAlternative = childCtx.accept(new ExtensionAdditionAlternativesGroupVisitor());
    } else if (childCtx instanceof NamedTypeContext) {
      extensionAdditionAlternative = childCtx.accept(new NamedTypeVisitor());
    } else {
      log.warn(getLogWithAsn1(extensionAdditionAlternativeCtx, 'Not supported ASN1:'));
    }
    return extensionAdditionAlternative;
  }
}
