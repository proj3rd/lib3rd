import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';

import { log } from '../../utils/logging';
import { getContextName, getLogWithAsn1 } from '../utils';

import { ComponentTypeContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
import { NamedType } from '../classes/namedType';
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
export class ComponentTypeVisitor extends AbstractParseTreeVisitor<NamedType> implements ASN_3gppVisitor<NamedType> {
  public defaultResult(): NamedType {
    return undefined;
  }

  public visitChildren(componentTypeCtx: ComponentTypeContext): NamedType {
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
    return componentType;
  }
}
