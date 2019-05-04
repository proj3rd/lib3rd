import { log } from '../../utils/logging';
import { getContextName, getLogWithAsn1 } from '../utils';

import { NamedTypeVisitor } from './namedType';
import { ValueVisitor } from './value';

/**
 * ANTLR4 grammar
 * ```
 * componentType  :
 *  namedType (OPTIONAL_LITERAL | DEFAULT_LITERAL value )?
 *  |  COMPONENTS_LITERAL OF_LITERAL  asnType
 * ```
 */
export class ComponentTypeVisitor {
  public visitChildren(componentTypeCtx: any): any /* TODO */ {
    const childCtxes = componentTypeCtx.children;
    let componentType = null;
    switch (getContextName(childCtxes[0])) {
      case 'namedType': {
        const namedTypeCtx = childCtxes[0];
        componentType = namedTypeCtx.accept(new NamedTypeVisitor());
        switch (childCtxes.length) {
          case 1: {
            break;
          }
          case 2: {
            componentType.optional = true;
            break;
          }
          case 3: {
            const valueCtx = childCtxes[2];
            const value = valueCtx.accept(new ValueVisitor());
            componentType.default = value;
            break;
          }
          default: {
            log.warn(getLogWithAsn1(componentTypeCtx, 'Not suported ASN1:'));
            break;
          }
        }
        break;
      }
      case null: {
        log.warn(getLogWithAsn1(componentTypeCtx, 'COMPONENTS OF not supported:'));
        break;
      }
      default: {
        log.warn(getLogWithAsn1(componentTypeCtx, 'Not suported ASN1:'));
        break;
      }
    }
    return componentTypeCtx;
  }
}
