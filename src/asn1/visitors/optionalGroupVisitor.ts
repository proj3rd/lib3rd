/* eslint-disable class-methods-use-this */
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { unimpl } from '../../utils/unimpl';
import { PrimitiveFieldName } from '../classes/primitiveFieldName';
import { Syntax } from '../classes/syntax';
import { OptionalGroupContext } from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';
import { TokenOrGroupSpecVisitor } from './tokenOrGroupSepcVisitor';

/**
 * # Grammar
 * ```
 * optionalGroup: L_BRACKET (tokenOrGroupSpec)+ R_BRACKET
 * ```
 * Currently, only supports `[string[] PrimitiveFieldName]` form
 */
export class OptionalGroupVisitor extends AbstractParseTreeVisitor<Syntax>
  implements grammar3rdVisitor<Syntax> {
  public visitChildren(ctx: OptionalGroupContext): Syntax {
    const tokenOrGroupSpecCtxes = ctx.tokenOrGroupSpec();
    const tokenOrGroupSpecs = tokenOrGroupSpecCtxes
      .map((tokenOrGroupSpecCtx) => tokenOrGroupSpecCtx.accept(new TokenOrGroupSpecVisitor()));
    const arrToLiteral: string[] = [];
    let primitiveFieldName: PrimitiveFieldName | undefined;
    tokenOrGroupSpecs.forEach((tokenOrGroupSpec) => {
      if (typeof tokenOrGroupSpec === 'string') {
        arrToLiteral.push(tokenOrGroupSpec);
      }
      if (tokenOrGroupSpec instanceof PrimitiveFieldName) {
        if (arrToLiteral.length === 0) {
          throw Error();
        }
        primitiveFieldName = tokenOrGroupSpec;
      }
    });
    if (primitiveFieldName === undefined) {
      throw Error();
    }
    const literal = arrToLiteral.join(' ');
    return new Syntax(literal, primitiveFieldName, true);
  }

  protected defaultResult(): Syntax {
    return unimpl();
  }
}
