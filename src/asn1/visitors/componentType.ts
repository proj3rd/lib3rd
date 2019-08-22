import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { TerminalNode } from 'antlr4ts/tree/TerminalNode';

import { log } from '../../utils/logging';
import { getLogWithAsn1 } from '../utils';

import { ComponentTypeContext, NamedTypeContext } from '../ASN_3gppParser';
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
    let componentType: NamedType;
    if (childCtxes[0] instanceof NamedTypeContext) {
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
    } else if (childCtxes[0] instanceof TerminalNode) {
      log.warn(getLogWithAsn1(componentTypeCtx, 'COMPONENTS OF not supported:'));
    } else {
      log.warn(getLogWithAsn1(componentTypeCtx, 'Not suported ASN1:'));
    }
    return componentType;
  }
}
