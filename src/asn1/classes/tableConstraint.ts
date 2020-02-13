import { IFormatConfig, IIe } from '../format/xlsx';
import { ConstraintSpec } from '../visitors/constraintSpec';
import { IModules } from '../visitors/modules';
import { IConstantAndModule } from './base';
import { Constraint } from './constraint';
import { IParameterMapping } from './definedType';

export class TableConstraint extends Constraint {
  public moduleReference: string;
  public objectSetReference: string;
  public atNotations: string[];

  constructor(moduleReference: string, objectSetReference: string, atNotations: string[] = []) {
    super();

    this.moduleReference = moduleReference;
    this.objectSetReference = objectSetReference;
    this.atNotations = atNotations;
  }

  public setConstraint(constraints: Array<Constraint | ConstraintSpec>): never {
    throw Error('Constraint cannot be set to constraint');
  }

  public expand(asn1Pool: IModules, moduleName?: string): never {
    throw Error('Constraint cannot be expanded');
  }

  public depthMax(): never {
    throw Error('Depth of constraint is not valid');
  }

  public replaceParameters(parameterMapping: IParameterMapping[]): never {
    throw Error('Parameters of constraint cannot be replaced');
  }

  public toString(): string {
    const definedObjectSet = `${this.moduleReference ? this.moduleReference + '.' : ''}${this.objectSetReference}`;
    return `{${definedObjectSet}} ({${this.atNotations.join(', ')}})`;
  }

  public fillWorksheet(ieElem: IIe, ws: any, row: number, col: number, depthMax: number,
                       constants: IConstantAndModule[], formatConfig: IFormatConfig,
                       depth: number = 0): never {
    throw Error('fillWorksheet() of Constraint cannot be called independently');
  }
}
