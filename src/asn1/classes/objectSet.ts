import { cloneDeep } from 'lodash';
import { fillRow, IFormatConfig, IIe } from '../format/xlsx';
import { findDefinition } from '../utils';
import { IModules } from '../visitors/modules';
import { Base, IConstantAndModule } from './base';
import { DefinedObjectClass } from './definedObjectClass';
import { ObjectClass } from './objectClass';
import { ObjectSetSpec } from './objectSetSpec';
import { Parameter } from './parameter';
import { Sequence } from './sequence';

export class ObjectSet extends Base {
  public objectSetSpec: ObjectSetSpec;
  public definedObjectClass: DefinedObjectClass;

  constructor(objectSetSpec: ObjectSetSpec) {
    super();

    this.objectSetSpec = objectSetSpec;
  }

  public depthMax(): number {
    return this.objectSetSpec.depthMax() + 1;
  }

  public expand(asn1Pool: IModules, moduleName?: string, parameterList: Parameter[] = []): ObjectSet {
    if (this.definedObjectClass) {
      const classDefinition = cloneDeep(findDefinition(this.definedObjectClass.toString(),
                                                       this.getModuleNameToPass(moduleName),
                                                       asn1Pool));
      if (classDefinition && classDefinition instanceof ObjectClass) {
        this.objectSetSpec.expand(asn1Pool, this.getModuleNameToPass(moduleName), [], classDefinition);
      }
    }
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

  public instantiate(template: Sequence, asn1Pool: IModules): ObjectSet {
    this.objectSetSpec.instantiate(template, asn1Pool);
    this.definedObjectClass = null;
    return this;
  }

  public replaceParameters(): ObjectSet {
    return this;
  }

  public setConstraint(): ObjectSet {
    // TODO
    return this;
  }

  public toString(): string {
    const stringArray = [
      '{',
      this.indent(this.objectSetSpec.toString()),
      '}',
    ];
    return stringArray.join('\n');
  }
}
