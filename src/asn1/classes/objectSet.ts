import { fillRow, IFormatConfig, IIe } from '../format/xlsx';
import { IModules } from '../visitors/modules';
import { IParameter } from '../visitors/parameter';
import { Base, IConstantAndModule } from './base';
import { ObjectSetSpec } from './objectSetSpec';

export class ObjectSet extends Base {
  public objectSetSpec: ObjectSetSpec;

  constructor(objectSetSpec: ObjectSetSpec) {
    super();

    this.objectSetSpec = objectSetSpec;
  }

  public depthMax(): number {
    return this.objectSetSpec.depthMax() + 1;
  }

  public expand(asn1Pool: IModules, moduleName?: string, parameterList: IParameter[] = []): ObjectSet {
    this.objectSetSpec.expand(asn1Pool, this.getModuleNameToPass(moduleName), parameterList);
    return this;
  }

  public fillWorksheet(ieElem: IIe, ws: any, row: number, col: number, depthMax: number,
                       constants: IConstantAndModule[], formatConfig: IFormatConfig,
                       depth: number = 0): [number, number] {
    ieElem.type = 'Object Set';
    [row, col] = fillRow(ieElem, ws, row, col, depth, formatConfig, depth);
    [row, col] = this.objectSetSpec.fillWorksheet({}, ws, row, col, depthMax, constants, formatConfig, depth + 1);
    return [row, col];
  }

  public replaceParameters(): void {
    // TODO
  }

  public setConstraint(): ObjectSet {
    // TODO
    return this;
  }

  public toString(): string {
    return ` { ${this.objectSetSpec.toString()} }`;
  }
}
