import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';

import { log } from '../../utils/logging';
import { getLogWithAsn1 } from '../utils';

import { ContentsConstraintContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
import { AsnType } from '../classes/asnType';
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
export class ContentsConstraintVisitor extends AbstractParseTreeVisitor<IContentsConstraint>
                                       implements ASN_3gppVisitor<IContentsConstraint> {
  public defaultResult(): IContentsConstraint {
    return {};
  }

  public visitChildren(contentsConstraintCtx: ContentsConstraintContext): IContentsConstraint {
    const childCtxes = contentsConstraintCtx.children;
    const contentsConstraint: IContentsConstraint = {};
    switch (childCtxes[0].text.toLowerCase()) {
      case 'containing': {
        const asnTypeCtx = childCtxes[1];
        const asnType = asnTypeCtx.accept(new AsnTypeVisitor());
        contentsConstraint.containing = asnType;
        const valueCtx = childCtxes[4];
        if (valueCtx) {
          const value = valueCtx.accept(new ValueVisitor());
          contentsConstraint.encodedBy = value;
        }
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
