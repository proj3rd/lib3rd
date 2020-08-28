import { Worksheet } from 'exceljs';
import { indent } from '../formatter';
import { HEADER_TYPE, IRowInput, drawBorder } from '../formatter/spreadsheet';
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

  public getDepth(): number {
    const depthFieldSpecs = this.fieldSpecs.reduce((prev, curr) => {
      return Math.max(prev, curr.getDepth() + 1);
    }, 0);
    const depthSyntaxList = this.syntaxList.reduce((prev, curr) => {
      return Math.max(prev, curr.getDepth() + 1);
    }, 0);
    return Math.max(depthFieldSpecs, depthSyntaxList);
  }

  public toSpreadsheet(worksheet: Worksheet, row: IRowInput, depth: number) {
    row[HEADER_TYPE] = 'CLASS';
    let r = worksheet.addRow(row);
    drawBorder(worksheet, r, depth);
    this.fieldSpecs.forEach((fieldSpec) => {
      fieldSpec.toSpreadsheet(worksheet, {}, depth + 1);
    });
    if (this.syntaxList.length > 0) {
      r = worksheet.addRow({
        [HEADER_TYPE]: 'WITH SYNTAX',
      });
      drawBorder(worksheet, r, depth);
      this.syntaxList.forEach((syntax) => {
        syntax.toSpreadsheet(worksheet, {}, depth + 1);
      });
    }
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
