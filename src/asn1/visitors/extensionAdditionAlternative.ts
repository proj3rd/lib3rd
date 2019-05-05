import { log } from '../../utils/logging';
import { getContextName, getLogWithAsn1 } from '../utils';

import { ExtensionAdditionAlternativesGroupVisitor } from './extensionAdditionAlternativesGroup';
import { NamedTypeVisitor } from './namedType';

/**
 * ANTR4 grammar
 * ```
 * extensionAdditionAlternative  :  extensionAdditionAlternativesGroup | namedType
 * ```
 */
export class ExtensionAdditionAlternativeVisitor {
  public visitChildren(extensionAdditionAlternativeCtx: any): any /* TODO */ {
    let extensionAdditionAlternative = null;
    const childCtx = extensionAdditionAlternativeCtx.children[0];
    switch (getContextName(childCtx)) {
      case 'extensionAdditionAlternativesGroup': {
        extensionAdditionAlternative = childCtx.accept(new ExtensionAdditionAlternativesGroupVisitor());
        break;
      }
      case 'namedType': {
        extensionAdditionAlternative = childCtx.accept(new NamedTypeVisitor());
        break;
      }
      default: {
        log.warn(getLogWithAsn1(extensionAdditionAlternativeCtx, 'Not supported ASN1:'));
        break;
      }
    }
    return extensionAdditionAlternative;
  }
}
