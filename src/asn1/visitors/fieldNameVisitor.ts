/* eslint-disable class-methods-use-this */
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { unimpl } from '../../utils/unimpl';
import { PrimitiveFieldName } from '../classes/primitiveFieldName';
import { FieldNameContext } from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';

/**
 * # Grammar
 * ```
 * fieldName: (AMPERSAND IDENTIFIER) (DOT AMPERSAND IDENTIFIER)*
 * ```
 */
export class FieldNameVisitor
  extends AbstractParseTreeVisitor<PrimitiveFieldName[]>
  implements grammar3rdVisitor<PrimitiveFieldName[]> {
  public visitChildren(ctx: FieldNameContext): PrimitiveFieldName[] {
    const primitiveFieldNameList: PrimitiveFieldName[] = [];
    const { childCount } = ctx;
    for (let i = 1; i < childCount; i += 3) {
      const name = ctx.getChild(i).text;
      primitiveFieldNameList.push(new PrimitiveFieldName(name));
    }
    return primitiveFieldNameList;
  }

  protected defaultResult(): PrimitiveFieldName[] {
    return unimpl();
  }
}
