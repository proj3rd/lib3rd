import { IFormatConfig, IIe } from '../format/xlsx';
import { IModules } from '../visitors/modules';
import { Unions } from '../visitors/unions';
import { Base, IConstantAndModule } from './base';
import { Comma } from './comma';
import { ExtensionMarker } from './extensionMarker';
import { ObjectClass } from './objectClass';
import { Parameter } from './parameter';
import { SingleValue } from './singleValue';
import { UnionMark } from './unionMark';

export class ObjectSetSpec extends Base {
  public objectSetSpec: Unions;

  constructor(objectSetSpec: Unions) {
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

  public expand(asn1Pool: IModules, moduleName?: string, parameterList: Parameter[] = [],
                classDefinition?: ObjectClass): ObjectSetSpec {
    /**
     * TODO: Replace each objectSetSpec with ObjectClass with specified value
     */
    this.objectSetSpec.forEach((item) => {
      if (item instanceof SingleValue) {
        item.expand(asn1Pool, this.getModuleNameToPass(moduleName), parameterList, classDefinition);
      }
    });
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

  public replaceParameters(): ObjectSetSpec {
    return this;
  }

  public setConstraint(): ObjectSetSpec {
    // TODO
    return this;
  }

  public toString(): string {
    const stringArray: string[] = [];
    const stringArrayBeforeComma: string[] = [];
    const stringArrayBeforeUnion: string[] = [];
    this.objectSetSpec.forEach((item) => {
      if (item instanceof Comma) {
        stringArrayBeforeUnion.push(item.toString());
        stringArrayBeforeComma.push(stringArrayBeforeUnion.join(''));
        stringArray.push(stringArrayBeforeComma.join('\n'));
        stringArrayBeforeUnion.length = 0;
        stringArrayBeforeComma.length = 0;
      } else if (item instanceof UnionMark) {
        stringArrayBeforeUnion.push(item.toString());
        stringArrayBeforeComma.push(stringArrayBeforeUnion.join('    '));
        stringArrayBeforeUnion.length = 0;
      } else {
        stringArrayBeforeUnion.push(item.toString());
      }
    });
    if (stringArrayBeforeUnion.length) {
      stringArrayBeforeComma.push(stringArrayBeforeUnion.join('    '));
      stringArray.push(stringArrayBeforeComma.join('\n'));
    }
    return stringArray.join('\n');
  }
}
