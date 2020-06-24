import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { unimpl } from '../../_devUtils';
import { ActualParameter } from '../classes/parameterizedType';
import {
  ActualParameterContext,
  AsnTypeContext,
  ValueContext,
} from '../grammar/ASN_3gppParser';
import { ASN_3gppVisitor } from '../grammar/ASN_3gppVisitor';
import { AsnTypeVisitor } from './asnTypeVisitor';
import { ValueVisitor } from './valueVisitor';

/**
 * # Grammar
 * ```
 * actualParameter: asnType | value
 * ```
 */
export class ActualParameterVisitor
  extends AbstractParseTreeVisitor<ActualParameter>
  implements ASN_3gppVisitor<ActualParameter> {
  public visitChildren(ctx: ActualParameterContext): ActualParameter {
    const childCtx = ctx.getChild(0);
    if (childCtx instanceof AsnTypeContext) {
      return childCtx.accept(new AsnTypeVisitor());
    } else if (childCtx instanceof ValueContext) {
      return childCtx.accept(new ValueVisitor());
    } else {
      throw Error();
    }
  }

  protected defaultResult(): ActualParameter {
    return unimpl();
  }
}
