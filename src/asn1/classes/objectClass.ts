import { indent } from '../formatter';
import { FixedTypeValueFieldSpec } from './fixedTypeValueFieldSpec';
import { Syntax } from './syntax';
import { TypeFieldSpec } from './typeFieldSpec';

export type ObjectClass = ObjectClassDefinition;

/**
 * X.681 clause 9.3
 * ```
 * CLASS { fieldSpec[0], ..., fieldSpec[n-1] } WITH SYNTAX { syntax[0] ... syntax[n-1] }
 * ```
 */
export class ObjectClassDefinition {
  public fieldSpecs: FieldSpec[];
  public syntaxList: Syntax[];

  constructor(fieldSpecs: FieldSpec[], syntaxList: Syntax[]) {
    this.fieldSpecs = fieldSpecs;
    this.syntaxList = syntaxList;
  }

  public toString(): string {
    const arrToString: string[] = [
      'CLASS {',
      indent(
        this.fieldSpecs.map((fieldSpec) => fieldSpec.toString()).join(',\n')
      ),
      '}',
    ];
    if (this.syntaxList.length > 0) {
      arrToString.push('WITH SYNTAX {');
      arrToString.push(
        indent(this.syntaxList.map((syntax) => syntax.toString()).join('\n'))
      );
      arrToString.push('}');
    }
    return arrToString.join('\n');
  }
}

export type FieldSpec = TypeFieldSpec | FixedTypeValueFieldSpec; // FixedTypeValue[Set]FieldSpec
// | VariableTypeFieldSpec // VariableTypeValue[Set]FieldSpec
// | ObjectFieldSpec // Object[Set]FieldSpec
