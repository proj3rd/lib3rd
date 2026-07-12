/* eslint-disable class-methods-use-this */
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { unimpl } from '../../utils/unimpl';
import {
  ActualParameterContext,
  AsnTypeContext,
  ValueContext,
} from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';
import { ActualParameter } from '../types/actualParamter';
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
  implements grammar3rdVisitor<ActualParameter> {
  public visitChildren(ctx: ActualParameterContext): ActualParameter {
    const childCtx = ctx.getChild(0);
    if (childCtx instanceof AsnTypeContext) {
      return childCtx.accept(new AsnTypeVisitor());
    } if (childCtx instanceof ValueContext) {
      return childCtx.accept(new ValueVisitor());
    }
    throw Error();
  }

  protected defaultResult(): ActualParameter {
    return unimpl();
  }
}
