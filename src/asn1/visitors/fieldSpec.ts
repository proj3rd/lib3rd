import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { log } from '../../utils/logging';
import { AsnTypeContext, DefinedObjectClassContext, FieldNameContext,
         FieldSpecContext, ObjectContext, ObjectSetContext,
         TypeOptionalitySpecContext, ValueContext, ValueOptionalitySpecContext,
         ValueSetContext, ValueSetOptionalitySpecContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
import { AsnType } from '../classes/asnType';
import { FieldSpec } from '../classes/fieldSpec';
import { AsnTypeVisitor } from './asnType';
import { BuiltinValue } from './builtinValue';
import { TypeOptionalitySpecVisitor } from './typeOptionalitySpec';
import { ValueOptionalitySpecVisitor } from './valueOptionalitySpec';

export interface IOptionalitySpec {
  optional: boolean;
  default?: AsnType | BuiltinValue;
}

/**
 * ANTLR4 grammar
 * ```
 * fieldSpec :
 * AMPERSAND IDENTIFIER
 * (
 *   typeOptionalitySpec?
 *  	| asnType (valueSetOptionalitySpec?  | UNIQUE_LITERAL? valueOptionalitySpec? )
 * | fieldName (OPTIONAL_LITERAL | (DEFAULT_LITERAL (valueSet | value)))?
 * | definedObjectClass (OPTIONAL_LITERAL | (DEFAULT_LITERAL (objectSet | object)))?
 * )
 * ```
 */
export class FieldSpecVisitor extends AbstractParseTreeVisitor<FieldSpec>
                                  implements ASN_3gppVisitor<FieldSpec> {
  public defaultResult(): FieldSpec {
    return undefined;
  }

  public visitChildren(fieldSpecCtx: FieldSpecContext): FieldSpec {
    const [ampersand, identifier, ...childCtxes] = fieldSpecCtx.children;
    const reference = `${ampersand}${identifier}`;
    let type: AsnType;
    let unique: boolean;
    let optionalitySpec: IOptionalitySpec;
    childCtxes.forEach((childCtx) => {
      if (childCtx instanceof TypeOptionalitySpecContext) {
        optionalitySpec = childCtx.accept(new TypeOptionalitySpecVisitor());
      } else if (childCtx instanceof ValueSetOptionalitySpecContext) {
        log.warn(childCtx);
        log.warn(new Error('Not supported ASN.1').stack);
        return;
      } else if (childCtx instanceof AsnTypeContext) {
        type = childCtx.accept(new AsnTypeVisitor());
      } else if (childCtx instanceof ValueOptionalitySpecContext) {
        optionalitySpec = childCtx.accept(new ValueOptionalitySpecVisitor());
      } else if (childCtx instanceof FieldNameContext) {
        log.warn(childCtx);
        log.warn(new Error('Not supported ASN.1').stack);
        return;
      } else if (childCtx instanceof ValueSetContext) {
        log.warn(childCtx);
        log.warn(new Error('Not supported ASN.1').stack);
        return;
      } else if (childCtx instanceof ValueContext) {
        log.warn(childCtx);
        log.warn(new Error('Not supported ASN.1').stack);
        return;
      } else if (childCtx instanceof DefinedObjectClassContext) {
        log.warn(childCtx);
        log.warn(new Error('Not supported ASN.1').stack);
        return;
      } else if (childCtx instanceof ObjectSetContext) {
        log.warn(childCtx);
        log.warn(new Error('Not supported ASN.1').stack);
        return;
      } else if (childCtx instanceof ObjectContext) {
        log.warn(childCtx);
        log.warn(new Error('Not supported ASN.1').stack);
        return;
      } else if (childCtx.text === 'UNIQUE') {
        unique = true;
      }
    });
    return new FieldSpec(reference, type, unique, optionalitySpec);
  }
}
