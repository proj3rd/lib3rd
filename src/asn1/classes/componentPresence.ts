import { isEmpty } from 'lodash';

import { log } from '../../utils/logging';

import { IFormatConfig, IIe } from '../format/xlsx';
import { IModules } from '../visitors/modules';
import { Base } from './base';

export class ComponentPresence extends Base {
  public identifier: string;
  public absentPresent: string;

  constructor(identifier: string, absentPresent: string) {
    super();

    this.identifier = identifier;
    this.absentPresent = absentPresent;
  }

  public setConstraint(constraint: any): ComponentPresence {
    if (!isEmpty(constraint)) {
      log.warn(`ComponentPresence could not handle constraint ${JSON.stringify(constraint)}`);
    }
    return this;
  }

  public expand(asn1Pool: IModules, moduleName?: string): never {
    throw Error(`${this.constructor.name}.expand does not need to be implemented`);
  }

  public depthMax(): never {
    throw Error('Depth of this class is not valid');
  }

  public replaceParameters(parameterMapping: {}): void {
    // Do nothing
  }

  public toString(): string {
    return `${this.identifier} ${this.absentPresent}`;
  }

  public fillWorksheet(ieElem: IIe, ws: any, row: number, col: number, depthMax: number, constants: any[],
                       formatConfig: IFormatConfig, depth: number = 0): never {
    throw Error(`${this.constructor.name}.fillWorksheet does not need to be implemented`);
  }
}
