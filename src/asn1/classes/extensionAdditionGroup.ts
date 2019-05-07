import { isEmpty } from 'lodash';

import { log } from '../../utils/logging';

import { Base } from './base';
import { NamedType } from './namedType';

export class ExtensionAdditionGroup extends Base {
  public componentTypeList: NamedType[];

  constructor(alternativeTypeList: any, versionNumber: any) {
    super();

    this.componentTypeList = alternativeTypeList;
    if (versionNumber !== undefined && versionNumber !== null) {
      log.warn('ExtensionAdditionGroup could not handle versionNumber');
    }
  }

  public setConstraint(constraint: any): ExtensionAdditionGroup {
    if (!isEmpty(constraint)) {
      log.warn(`ExtensionAdditionGroup could not handle constraint ${JSON.stringify(constraint)}`);
    }
    return this;
  }

  public expand(): ExtensionAdditionGroup {
    // TODO
    return this;
  }

  public depthMax(): number {
    let depthMax = 1;
    this.componentTypeList.forEach((item) => {
      depthMax = Math.max(depthMax, item.depthMax() + 1);
    });
    return depthMax;
  }

  public toString(): string {
    return [
      '[[',
      this.componentTypeList.map((item) => this.indent(item.toString())).join(',\n'),
      ']]',
    ].join('\n');
  }
}
