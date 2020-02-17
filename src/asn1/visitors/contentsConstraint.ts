import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';

import { log } from '../../utils/logging';
import { getLogWithAsn1 } from '../utils';

import { ContentsConstraintContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
import { AsnType } from '../classes/asnType';
import { ContainingEncodedByConstraint } from '../classes/containingEncodedByConstraint';
import { AsnTypeVisitor } from './asnType';
import { BuiltinValue } from './builtinValue';
import { ComponentPresenceLists, ComponentPresenceListsVisitor } from './componentPresenceLists';
import { ValueVisitor } from './value';

export interface IContentsConstraint {
  containing?: AsnType;
  encodedBy?: BuiltinValue;
  withComponents?: ComponentPresenceLists;
}

/**
 * ANTLR4 grammar
 * ```contentsConstraint :
 *    CONTAINING_LITERAL asnType
 *  |  ENCODED_LITERAL BY_LITERAL value
 *  |  CONTAINING_LITERAL asnType ENCODED_LITERAL BY_LITERAL value
 *  |  WITH_LITERAL COMPONENTS_LITERAL L_BRACE componentPresenceLists R_BRACE
 * ```
 */
export class ContentsConstraintVisitor
       extends AbstractParseTreeVisitor<ContainingEncodedByConstraint | IContentsConstraint>
       implements ASN_3gppVisitor<ContainingEncodedByConstraint | IContentsConstraint> {
  public defaultResult(): ContainingEncodedByConstraint | IContentsConstraint {
    return {};
  }

  public visitChildren(contentsConstraintCtx: ContentsConstraintContext)
      : ContainingEncodedByConstraint | IContentsConstraint {
    const childCtxes = contentsConstraintCtx.children;
    let contentsConstraint: ContainingEncodedByConstraint | ContainingEncodedByConstraint | IContentsConstraint = {};
    switch (childCtxes[0].text.toLowerCase()) {
      case 'containing': {
        const asnTypeCtx = childCtxes[1];
        const asnType = asnTypeCtx.accept(new AsnTypeVisitor());
        const valueCtx = childCtxes[4];
        const value = valueCtx ? valueCtx.accept(new ValueVisitor()) : undefined;
        contentsConstraint = new ContainingEncodedByConstraint(asnType, value);
        break;
      }
      case 'encoded': {
        log.warn(getLogWithAsn1(contentsConstraintCtx, 'Encoded not supported:'));
        break;
      }
      case 'with': {
        const componentPresenceListsCtx = childCtxes[3];
        const componentPresenceLists = componentPresenceListsCtx.accept(new ComponentPresenceListsVisitor());
        contentsConstraint.withComponents = componentPresenceLists;
        break;
      }
      default: {
        log.warn(getLogWithAsn1(contentsConstraintCtx, 'Not supported ASN1:'));
        break;
      }
    }
    return contentsConstraint;
  }
}
