import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { FieldSpecContext, ObjectClassDefnContext, WithSyntaxSpecContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
import { FieldSpec } from '../classes/fieldSpec';
import { ObjectClass } from '../classes/objectClass';
import { WithSyntaxSpec } from '../classes/withSyntaxSpec';
import { FieldSpecVisitor } from './fieldSpec';
import { WithSyntaxSpecVisitor } from './withSyntaxSpec';

/**
 * ANTLR4 grammar
 * ```
 * objectClassDefn : CLASS_LITERAL L_BRACE  fieldSpec (COMMA fieldSpec  )*  R_BRACE  withSyntaxSpec?
 * ```
 */
export class ObjectClassDefnVisitor extends AbstractParseTreeVisitor<ObjectClass>
                                  implements ASN_3gppVisitor<ObjectClass> {
  public defaultResult(): ObjectClass {
    return undefined;
  }

  public visitChildren(objectClassDefnCtx: ObjectClassDefnContext): ObjectClass {
    const childCtxes = objectClassDefnCtx.children;
    const fieldSpecs: FieldSpec[] = [];
    let withSyntaxSpec: WithSyntaxSpec;
    childCtxes.forEach((childCtx) => {
      if (childCtx instanceof FieldSpecContext) {
        fieldSpecs.push(childCtx.accept(new FieldSpecVisitor()));
      }
      if (childCtx instanceof WithSyntaxSpecContext) {
        withSyntaxSpec = childCtx.accept(new WithSyntaxSpecVisitor());
      }
    });
    return new ObjectClass(fieldSpecs, withSyntaxSpec);
  }
}
