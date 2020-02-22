import { IFormatConfig, IIe } from '../format/xlsx';
import { BuiltinType } from '../visitors/builtinType';
import { ConstraintSpec } from '../visitors/constraintSpec';
import { IModules } from '../visitors/modules';
import { AsnBoolean } from './asnBoolean';
import { Base, IConstantAndModule } from './base';
import { BitString } from './bitString';
import { Choice } from './choice';
import { Constraint } from './constraint';
import { IParameterMapping } from './definedType';
import { Enumerated } from './enumerated';
import { Integer } from './integer';
import { Null } from './null';
import { OctetString } from './octetString';
import { Parameter } from './parameter';
import { Sequence } from './sequence';
import { SequenceOf } from './sequenceOf';

export class ObjectIdentifierValue extends Base {
  public objIdComponentsList: Array<BuiltinType | string | number>;

  constructor(objIdComponentsList: Array<BuiltinType | string | number>) {
    super();

    this.objIdComponentsList = objIdComponentsList;
  }

  public depthMax(): number {
    let depthMax = 0;
    this.objIdComponentsList.forEach((objIdComponents) => {
      if (objIdComponents instanceof AsnBoolean ||
          objIdComponents instanceof BitString ||
          objIdComponents instanceof Choice ||
          objIdComponents instanceof Enumerated ||
          objIdComponents instanceof Integer ||
          objIdComponents instanceof Null ||
          objIdComponents instanceof OctetString ||
          objIdComponents instanceof Sequence ||
          objIdComponents instanceof SequenceOf) {
        depthMax = Math.max(depthMax, objIdComponents.depthMax() + 1);
      }
    });
    return depthMax;
  }

  public expand(asn1Pool: IModules, moduleName?: string, parameterList: Parameter[] = []): ObjectIdentifierValue {
    // TODO
    return this;
  }

  public fillWorksheet(ieElem: IIe, ws: any, row: number, col: number, depthMax: number,
                       constants: IConstantAndModule[], formatConfig: IFormatConfig,
                       depth: number = 0): [number, number] {
    // TODO
    return [row, col];
  }

  public replaceParameters(parameterMapping: IParameterMapping[]): void {
    // TODO
  }

  public setConstraint(constraints: Array<Constraint | ConstraintSpec>): ObjectIdentifierValue {
    // Do nothing
    return this;
  }

  public toString(): string {
    return !this.objIdComponentsList.length ? ' { }' :
      ` { ${this.objIdComponentsList.map((item) => item.toString()).join(', ')} }`;
  }
}
