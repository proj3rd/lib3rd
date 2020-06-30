import { unimpl } from '../../_devUtils';
import { IExpandOption } from '../expander';
import { AsnType } from './asnType';
import { _Constraint } from './constraint';
import { Modules } from './modules';
import { NamedType } from './namedType';
import { SizeConstraint } from './sizeConstraint';

export class SequenceOfType {
  public baseType: AsnType | NamedType;
  public constraint: SizeConstraint | undefined;

  private sequenceOfTypeTag: undefined;

  constructor(
    baseType: AsnType | NamedType,
    constraint: SizeConstraint | undefined
  ) {
    this.baseType = baseType;
    this.constraint = constraint;
  }

  public expand(modules: Modules, expandOption: IExpandOption): SequenceOfType {
    const expandedBaseType = this.baseType.expand(modules, expandOption);
    if (expandedBaseType !== undefined) {
      this.baseType = expandedBaseType;
    }
    return this;
  }

  public setConstraints(constraints: _Constraint[]) {
    if (constraints.length > 0) {
      unimpl();
    }
  }

  public toString(): string {
    const arrToString = ['SEQUENCE'];
    if (this.constraint) {
      arrToString.push(`(${this.constraint.toString()})`);
    }
    arrToString.push('OF');
    arrToString.push(this.baseType.toString());
    return arrToString.join(' ');
  }
}
