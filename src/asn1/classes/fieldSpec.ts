import { ObjectIdentifierValue } from '../classes/objectIdentifierValue';
import { IFormatConfig, IIe } from '../format/xlsx';
import { BuiltinValue } from '../visitors/builtinValue';
import { ConstraintSpec } from '../visitors/constraintSpec';
import { IOptionalitySpec } from '../visitors/fieldSpec';
import { IModules } from '../visitors/modules';
import { AsnType } from './asnType';
import { Base, IConstantAndModule } from './base';
import { Constraint } from './constraint';
import { IParameterMapping } from './definedType';
import { Parameter } from './parameter';

export class FieldSpec extends Base {
  public reference: string;
  public type: AsnType;
  public actualValue: string;
  public unique: boolean;
  public optional: boolean;
  public default: AsnType | BuiltinValue;
  /**
   * WITH SYNTAX {
   *   &alias    reference
   * }
   */
  public alias: string;

  constructor(reference: string, type: AsnType, unique: boolean,
              optionalitySpec: IOptionalitySpec = { optional: false }) {
    super();

    this.reference = reference;
    this.type = type;
    this.unique = unique;
    this.optional = optionalitySpec.optional;
    this.default = optionalitySpec.default;
  }

  public depthMax(): number {
    if (this.default instanceof AsnType || this.default instanceof ObjectIdentifierValue) {
      return Math.max(0, this.default.depthMax() + 1);
    }
    return 0;
  }

  public expand(asn1Pool: IModules, moduleName?: string, parameterList?: Parameter[]): FieldSpec {
    // TODO
    return this;
  }

  public fillWorksheet(ieElem: IIe, ws: any, row: number, col: number, depthMax: number,
                       constants: IConstantAndModule[], formatConfig: IFormatConfig,
                       depth?: number): [number, number] {
    // TODO
    return [row, col];
  }

  public replaceParameters(parameterMapping: IParameterMapping[]): void {
    // Do nothing
  }

  public setConstraint(constraints: Array<Constraint | ConstraintSpec>): FieldSpec {
    return this;
  }

  public toString(): string {
    const pad = this.type || this.unique || this.optional || this.default ? 48 : 0;
    const stringArray: string[] = [this.reference.padEnd(pad)];
    if (this.actualValue) {
      stringArray.push(this.actualValue.toString());
    } else if (this.type) {
      stringArray.push(this.type.toString());
    }
    if (this.unique) {
      stringArray.push('UNIQUE');
    }
    if (this.optional) {
      stringArray.push('OPTIONAL');
    }
    if (this.default) {
      stringArray.push('DEFAULT');
      stringArray.push(this.default.toString());
    }
    return stringArray.join('    ');
  }
}
