import { IFormatConfig, IIe } from '../format/xlsx';
import { ConstraintSpec } from '../visitors/constraintSpec';
import { IModules } from '../visitors/modules';
import { Base, IConstantAndModule } from './base';
import { Constraint } from './constraint';
import { IParameterMapping } from './definedType';
import { FieldSpec } from './fieldSpec';
import { Parameter } from './parameter';
import { WithSyntaxSpec } from './withSyntaxSpec';

export class ObjectClass extends Base {
  public fieldSpecs: FieldSpec[];
  public withSyntaxSpec: WithSyntaxSpec;

  constructor(fieldSpecs: FieldSpec[], withSyntaxSpec?: WithSyntaxSpec) {
    super();

    this.fieldSpecs = fieldSpecs;
    this.withSyntaxSpec = withSyntaxSpec;
    this.withSyntaxSpec.syntaxList.forEach((syntax) => {
      const fieldSpec = this.fieldSpecs.find((item) => item.reference === syntax.primitiveFieldName);
      fieldSpec.alias = syntax.literal;
    });
  }

  public depthMax(): number {
    let depthMax = 0;
    this.fieldSpecs.forEach((fieldSpec) => {
      depthMax = Math.max(depthMax, fieldSpec.depthMax() + 1);
    });
    return depthMax;
  }

  public expand(asn1Pool: IModules, moduleName?: string, parameterList?: Parameter[]): ObjectClass {
    this.fieldSpecs.forEach((fieldSpec) => {
      fieldSpec.expand(asn1Pool, this.getModuleNameToPass(moduleName), parameterList);
    });
    return this;
  }

  public fillWorksheet(ieElem: IIe, ws: any, row: number, col: number, depthMax: number,
                       constants: IConstantAndModule[], formatConfig: IFormatConfig,
                       depth?: number): [number, number] {
    // TODO
    return [row, col];
  }

  public replaceParameters(parameterMapping: IParameterMapping[]): void {
    // TODO
  }

  public setConstraint(constraints: Array<Constraint | ConstraintSpec>): ObjectClass {
    return this;
  }

  public toString(): string {
    const stringArray: string[] = ['CLASS {'];
    stringArray.push(this.fieldSpecs.map((fieldSpec) => this.indent(fieldSpec.toString())).join(',\n'));
    stringArray.push('}');
    if (this.withSyntaxSpec) {
      stringArray.push(this.withSyntaxSpec.toString());
    }
    return stringArray.join('\n');
  }
}
