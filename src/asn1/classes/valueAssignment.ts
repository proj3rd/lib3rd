import { Workbook } from 'exceljs';
import { todo } from 'unimpl';
import { IParameterMapping } from '../expander';
import { getWorkbook } from '../formatter';
import { AsnType } from './asnType';
import { Modules } from './modules';
import { Value } from './value';

export class ValueAssignment {
  public name: string;
  public asnType: AsnType;
  public value: Value;

  private valueAssignmentTag: undefined;

  constructor(name: string, asnType: AsnType, value: Value) {
    this.name = name;
    this.asnType = asnType;
    this.value = value;
  }

  public expand(
    modules: Modules,
    parameterMappings: IParameterMapping[]
  ): ValueAssignment {
    return this;
  }

  public getDepth(): number {
    if (typeof this.value === 'string') {
      return 0;
    }
    return this.value.getDepth();
  }

  public toString(): string {
    return `${
      this.name
    }  ${this.asnType.toString()} ::= ${this.value.toString()}`;
  }
}
