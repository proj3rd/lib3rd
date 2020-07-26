import { unimpl } from 'unimpl';
import { FixedTypeValueFieldSpec } from './fixedTypeValueFieldSpec';
import { Syntax } from './syntax';
import { TypeFieldSpec } from './typeFieldSpec';

export type ObjectClass = ObjectClassDefinition;

export class ObjectClassDefinition {
  public fieldSpecs: FieldSpec[];
  public syntaxList: Syntax[];

  constructor(fieldSpecs: FieldSpec[], syntaxList: Syntax[]) {
    this.fieldSpecs = fieldSpecs;
    this.syntaxList = syntaxList;
  }

  public toString(): string {
    return unimpl();
  }
}

export type FieldSpec = TypeFieldSpec | FixedTypeValueFieldSpec; // FixedTypeValue[Set]FieldSpec
// | VariableTypeFieldSpec // VariableTypeValue[Set]FieldSpec
// | ObjectFieldSpec // Object[Set]FieldSpec
