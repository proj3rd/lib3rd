import { IFormatConfig, IIe } from '../format/xlsx';
import { ElementsTypes } from '../visitors/elements';
import { IModules } from '../visitors/modules';
import { Base, IConstantAndModule } from './base';
import { ExtensionMarker } from './extensionMarker';
import { Parameter } from './parameter';

export class ObjectSetSpec extends Base {
  public objectSetSpec: Array<ElementsTypes | ExtensionMarker>;

  constructor(objectSetSpec: Array<ElementsTypes | ExtensionMarker>) {
    super();

    this.objectSetSpec = objectSetSpec;
  }

  public depthMax(): number {
    let depthMax = 0;
    this.objectSetSpec.forEach((item) => {
      if (item instanceof ExtensionMarker) {
        depthMax = Math.max(depthMax, item.depthMax() + 1);
      }
    });
    return depthMax;
  }

  public expand(asn1Pool: IModules, moduleName?: string, parameterList: Parameter[] = []): ObjectSetSpec {
    // TODO
    return this;
  }

  public fillWorksheet(ieElem: IIe, ws: any, row: number, col: number, depthMax: number,
                       constants: IConstantAndModule[], formatConfig: IFormatConfig,
                       depth: number = 0): [number, number] {
    // TODO
    this.objectSetSpec.forEach((item) => {
      // TODO
    });
    return [row, col];
  }

  public replaceParameters(): void {
    // TODO
  }

  public setConstraint(): ObjectSetSpec {
    // TODO
    return this;
  }

  public toString(): string {
    // TODO
    return '';
  }
}
