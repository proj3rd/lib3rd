import { todo } from 'unimpl';
import { IParameterMapping } from '../expander';
import { Modules } from './modules';
import { ValueReference } from './ValueReference';

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
    parameterMappings: IParameterMapping[]
  ): IntegerValue {
    const { value } = this;
    if (value instanceof ValueReference) {
      const parameterMapping = parameterMappings.find((paramMap) => {
        return paramMap.parameter.dummyReference === value.valueReference;
      });
      if (parameterMapping === undefined) {
        return this;
      } else {
        if (parameterMapping.actualParameter === undefined) {
          return this;
        } else {
          return todo();
        }
      }
    }
    return this;
  }

  public getDepth(): number {
    return 0;
  }

  public toString(): string {
    return this.literal;
  }
}
