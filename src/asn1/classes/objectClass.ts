import { Worksheet } from 'exceljs';
import { cloneDeep } from 'lodash';
import { unimpl } from 'unimpl';
import { IParameterMapping } from '../expander';
import { indent } from '../formatter';
import {
  drawBorder,
  HEADER_TYPE,
  IRowInput,
  setOutlineLevel,
} from '../formatter/spreadsheet';
import { FixedTypeValueFieldSpec } from './fixedTypeValueFieldSpec';
import { Modules } from './modules';
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

  /**
   * Expand `fieldSpecs` property. This will mutate the object itself.
   * @param modules
   * @param parameterMappings
   */
  public expand(
    modules: Modules,
    parameterMappings: IParameterMapping[]
  ): ObjectClassDefinition {
    if (parameterMappings.length) {
      return unimpl();
    }
    this.fieldSpecs = this.fieldSpecs.map((fieldSpec) => {
      return cloneDeep(fieldSpec).expand(modules, parameterMappings);
    });
    return this;
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
    const r1 = worksheet.addRow(row);
    setOutlineLevel(r1, depth);
    drawBorder(worksheet, r1, depth);
    this.fieldSpecs.forEach((fieldSpec) => {
      fieldSpec.toSpreadsheet(worksheet, {}, depth + 1);
    });
    if (this.syntaxList.length > 0) {
      const r2 = worksheet.addRow({
        [HEADER_TYPE]: 'WITH SYNTAX',
      });
      setOutlineLevel(r2, depth);
      drawBorder(worksheet, r2, depth);
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
