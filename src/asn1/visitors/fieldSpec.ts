import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { log } from '../../utils/logging';
import { AsnTypeContext, FieldSpecContext, TypeOptionalitySpecContext, ValueOptionalitySpecContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
import { AsnType } from '../classes/asnType';
import { FieldSpec } from '../classes/fieldSpec';
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
    const firstChildCtx = childCtxes[0];
    if (!firstChildCtx || firstChildCtx instanceof TypeOptionalitySpecContext) {
      const typeOptionalitySpec = firstChildCtx.accept(new TypeOptionalitySpecVisitor());
      return new FieldSpec(reference, false, typeOptionalitySpec);
    } else {
      if (firstChildCtx instanceof AsnTypeContext) {
        const possiblyUniqueCtx = childCtxes[childCtxes.length - 2];
        const unique = possiblyUniqueCtx && possiblyUniqueCtx.text === 'UNIQUE' ? true : false;
        const lastChildCtx = childCtxes[childCtxes.length - 1];
        if (lastChildCtx && lastChildCtx instanceof ValueOptionalitySpecContext) {
          const valueOptionalitySpec = lastChildCtx.accept(new ValueOptionalitySpecVisitor());
          return new FieldSpec(reference, unique, valueOptionalitySpec);
        } else {
          log.warn(fieldSpecCtx);
          log.warn(new Error('Not supported ASN.1').stack);
        }
      } else {
        log.warn(fieldSpecCtx);
        log.warn(new Error('Not supported ASN.1').stack);
      }
    }
  }
}
