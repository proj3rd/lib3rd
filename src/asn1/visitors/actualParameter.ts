import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';

import { log } from '../../utils/logging';
import { getContextName, getLogWithAsn1 } from '../utils';

import { ActualParameterContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
import { AsnType, AsnTypeVisitor } from './asnType';
import { BuiltinValue } from './builtinValue';
import { ValueVisitor } from './value';

export type ActualParameter = AsnType | BuiltinValue;

/**
 * ANTLR4 grammar
 * ```
 * actualParameter : asnType | value
 * ```
 */
export class ActualParameterVisitor extends AbstractParseTreeVisitor<ActualParameter>
                                    implements ASN_3gppVisitor<ActualParameter> {
  public defaultResult(): ActualParameter {
    return undefined;
  }

  public visitChildren(actualParameterCtx: ActualParameterContext): ActualParameter {
    const childCtx = actualParameterCtx.children[0];
    switch (getContextName(childCtx)) {
      case 'asnType': {
        return childCtx.accept(new AsnTypeVisitor());
      }
      case 'value': {
        return childCtx.accept(new ValueVisitor());
      }
      default: {
        log.warn(getLogWithAsn1(actualParameterCtx, 'Not supported ASN.1'));
        break;
      }
    }
  }
}
