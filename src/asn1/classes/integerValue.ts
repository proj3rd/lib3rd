import { Worksheet } from 'exceljs';
import { todo } from 'unimpl';
import { setOutlineLevel, IRowInput, drawBorder } from '../../common/spreadsheet';
import { IParameterMapping } from '../expander';
import { appendInColumn, HEADER_TYPE } from '../formatter/spreadsheet';
import { Modules } from './modules';
import { ValueReference } from './valueReference';

export class IntegerValue {
  public literal: string;
  public value: number | ValueReference;

  private integerValueTag: undefined;

  constructor(literal: string) {
    this.literal = literal;
    const value = +literal;
    if (Number.isNaN(value)) {
      this.value = new ValueReference(literal);
    } else {
      this.value = value;
    }
  }

  public expand(
    modules: Modules,
    parameterMappings: IParameterMapping[],
  ): IntegerValue {
    const { value } = this;
    if (value instanceof ValueReference) {
      const parameterMapping = parameterMappings
        .find((paramMap) => paramMap.parameter.dummyReference === value.valueReference);
      if (parameterMapping === undefined) {
        return this;
      }
      if (parameterMapping.actualParameter === undefined) {
        return this;
      }
      return todo();
    }
    return this;
  }

  // eslint-disable-next-line class-methods-use-this
  public getDepth(): number {
    return 0;
  }

  public toSpreadsheet(worksheet: Worksheet, row: IRowInput, depth: number) {
    appendInColumn(row, HEADER_TYPE, this.toString());
    const r = worksheet.addRow(row);
    setOutlineLevel(r, depth);
    drawBorder(worksheet, r, depth);
  }

  public toString(): string {
    return this.literal;
  }
}
