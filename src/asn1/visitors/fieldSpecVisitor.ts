/* eslint-disable class-methods-use-this */
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { unimpl } from 'unimpl';
import { FixedTypeValueFieldSpec } from '../classes/fixedTypeValueFieldSpec';
import { Optionality } from '../classes/optionality';
import { PrimitiveFieldName } from '../classes/primitiveFieldName';
import { TypeFieldSpec } from '../classes/typeFieldSpec';
import { FieldSpecContext } from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';
import { FieldSpec } from '../types/fieldSpec';
import { AsnTypeVisitor } from './asnTypeVisitor';
import { TypeOptionalitySpecVisitor } from './typeOptionalitySpecVisitor';
import { ValueOptionalitySpecVisitor } from './valueOptionalitySpecVisitor';
import { ValueSetOptionalitySpecVisitor } from './valueSetOptionalitySpecVisitor';

/**
 * # Grammar
 * ```
 * fieldSpec: AMPERSAND IDENTIFIER (
 *     typeOptionalitySpec?
 *   | asnType (valueSetOptionalitySpec? | UNIQUE_LITERAL? valueOptionalitySpec?)
 *   | fieldName (OPTIONAL_LITERAL | (DEFAULT_LITERAL (valueSet | value)))?
 *   | definedObjectClass (OPTIONAL_LITERAL | (DEFAULT_LITERAL (objectSet | object)))?
 * )
 * ```
 */
export class FieldSpecVisitor extends AbstractParseTreeVisitor<FieldSpec>
  implements grammar3rdVisitor<FieldSpec> {
  public visitChildren(ctx: FieldSpecContext): FieldSpec {
    const name = new PrimitiveFieldName(ctx.getChild(1).text);
    let optionality: Optionality | undefined;
    const asnTypeCtx = ctx.asnType();
    if (asnTypeCtx !== undefined) {
      const asnType = asnTypeCtx.accept(new AsnTypeVisitor());
      const valueSetOptionalitySpecCtx = ctx.valueSetOptionalitySpec();
      if (valueSetOptionalitySpecCtx !== undefined) {
        optionality = valueSetOptionalitySpecCtx.accept(
          new ValueSetOptionalitySpecVisitor(),
        );
      }
      const possiblyUniqueCtx = ctx.childCount >= 4 ? ctx.getChild(3) : undefined;
      const unique = !!(possiblyUniqueCtx !== undefined && possiblyUniqueCtx.text === 'UNIQUE');
      const valueOptionalitySpecCtx = ctx.valueOptionalitySpec();
      if (valueOptionalitySpecCtx !== undefined) {
        optionality = valueOptionalitySpecCtx.accept(
          new ValueOptionalitySpecVisitor(),
        );
      }
      return new FixedTypeValueFieldSpec(name, asnType, unique, optionality);
    }
    const fieldNameCtx = ctx.fieldName();
    if (fieldNameCtx !== undefined) {
      return unimpl();
    }
    const definedObjectClassCtx = ctx.definedObjectClass();
    if (definedObjectClassCtx !== undefined) {
      return unimpl();
    }
    const typeOptionalitySpecCtx = ctx.typeOptionalitySpec();
    optionality = typeOptionalitySpecCtx === undefined
      ? undefined
      : typeOptionalitySpecCtx.accept(new TypeOptionalitySpecVisitor());
    return new TypeFieldSpec(name, optionality);
  }

  protected defaultResult(): FieldSpec {
    return unimpl();
  }
}
