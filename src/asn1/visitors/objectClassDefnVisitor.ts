/* eslint-disable class-methods-use-this */
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { unimpl } from '../../utils/unimpl';
import { ObjectClassDefinition } from '../classes/objectClass';
import { ObjectClassDefnContext } from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';
import { FieldSpecVisitor } from './fieldSpecVisitor';
import { WithSyntaxSpecVisitor } from './withSyntaxSpecVisitor';

/**
 * # Grammar
 * ```
 * objectClassDefn: CLASS_LITERAL L_BRACE fieldSpec (COMMA fieldSpec)* R_BRACE withSyntaxSpec?
 * ```
 */
export class ObjectClassDefnVisitor
  extends AbstractParseTreeVisitor<ObjectClassDefinition>
  implements grammar3rdVisitor<ObjectClassDefinition> {
  public visitChildren(ctx: ObjectClassDefnContext): ObjectClassDefinition {
    const fieldSpecCtxes = ctx.fieldSpec();
    const fieldSpecs = fieldSpecCtxes
      .map((fieldSpecCtx) => fieldSpecCtx.accept(new FieldSpecVisitor()));
    const withSyntaxSpecCtx = ctx.withSyntaxSpec();
    const syntaxList = withSyntaxSpecCtx === undefined
      ? []
      : withSyntaxSpecCtx.accept(new WithSyntaxSpecVisitor());
    return new ObjectClassDefinition(fieldSpecs, syntaxList);
  }

  protected defaultResult(): ObjectClassDefinition {
    return unimpl();
  }
}
