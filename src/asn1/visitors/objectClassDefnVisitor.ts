import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { unimpl } from 'unimpl';
import { ObjectClassDefinition } from '../classes/objectClass';
import { ObjectClassDefnContext } from '../grammar/ASN_3gppParser';
import { ASN_3gppVisitor } from '../grammar/ASN_3gppVisitor';
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
  implements ASN_3gppVisitor<ObjectClassDefinition> {
  public visitChildren(ctx: ObjectClassDefnContext): ObjectClassDefinition {
    const fieldSpecCtxes = ctx.fieldSpec();
    const fieldSpecs = fieldSpecCtxes.map((fieldSpecCtx) =>
      fieldSpecCtx.accept(new FieldSpecVisitor())
    );
    const withSyntaxSpecCtx = ctx.withSyntaxSpec();
    const syntaxList =
      withSyntaxSpecCtx === undefined
        ? []
        : withSyntaxSpecCtx.accept(new WithSyntaxSpecVisitor());
    return new ObjectClassDefinition(fieldSpecs, syntaxList);
  }

  protected defaultResult(): ObjectClassDefinition {
    return unimpl();
  }
}
