import { IFormatConfig, IIe } from '../format/xlsx';
import { ConstraintSpec } from '../visitors/constraintSpec';
import { IModules } from '../visitors/modules';
import { Base, IConstantAndModule } from './base';
import { Constraint } from './constraint';
import { IParameterMapping } from './definedType';
import { Parameter } from './parameter';
import { Syntax } from './syntax';

export class WithSyntaxSpec extends Base {
  public syntaxList: Syntax[];

  constructor(syntaxList: Syntax[]) {
    super();

    this.syntaxList = syntaxList;
  }

  public depthMax(): number {
    return 0;
  }

  public expand(asn1Pool: IModules, moduleName?: string, parameterList?: Parameter[]): WithSyntaxSpec {
    return this;
  }

  public fillWorksheet(ieElem: IIe, ws: any, row: number, col: number, depthMax: number,
                       constants: IConstantAndModule[], formatConfig: IFormatConfig,
                       depth?: number): [number, number] {
    throw Error('WithSyntaxSpec.fillWorksheet() shall not be called independently');
  }

  public replaceParameters(parameterMapping: IParameterMapping[]): void {
    // Do nothing
  }

  public setConstraint(constraints: Array<Constraint | ConstraintSpec>): WithSyntaxSpec {
    return this;
  }

  public toString(): string {
    return [
      'WITH SYNTAX {',
      ...this.syntaxList.map((syntax) => syntax.toString()),
      '}',
    ].join('\n');
  }
}
