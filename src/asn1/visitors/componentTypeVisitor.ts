import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { unimpl } from 'unimpl';
import { ComponentType } from '../classes/componentType';
import { NamedType } from '../classes/namedType';
import { Optionality } from '../classes/optionality';
import { ComponentTypeContext } from '../grammar/ASN_3gppParser';
import { ASN_3gppVisitor } from '../grammar/ASN_3gppVisitor';
import { NamedTypeVisitor } from './namedTypeVisitor';
import { ValueVisitor } from './valueVisitor';

/**
 * # Grammar
 * ```
 * componentType:
 *   namedType (OPTIONAL_LITERAL | DEFAULT_LITERAL value)? |
 *   COMPONENTS_LITERAL OF_LITERAL asnType
 * ```
 */
export class ComponentTypeVisitor
  extends AbstractParseTreeVisitor<ComponentType>
  implements ASN_3gppVisitor<ComponentType> {
  public visitChildren(ctx: ComponentTypeContext): ComponentType {
    const namedTypeCtx = ctx.namedType();
    let namedType: NamedType | undefined;
    let optionality: Optionality | undefined;
    if (namedTypeCtx !== undefined) {
      namedType = namedTypeCtx.accept(new NamedTypeVisitor());
      if (ctx.childCount > 1) {
        const secondCtx = ctx.getChild(1);
        switch (secondCtx.text) {
          case 'OPTIONAL': {
            optionality = new Optionality();
            break;
          }
          case 'DEFAULT': {
            const valueCtx = ctx.value();
            if (valueCtx === undefined) {
              throw Error();
            }
            const value = valueCtx.accept(new ValueVisitor());
            optionality = new Optionality(value);
            break;
          }
          default: {
            throw Error(secondCtx.text);
          }
        }
      }
    }
    if (namedType === undefined) {
      throw Error('Not implemented');
    }
    return new ComponentType(namedType, optionality, '');
  }

  protected defaultResult(): ComponentType {
    return unimpl();
  }
}
