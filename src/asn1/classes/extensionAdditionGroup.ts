import { isEmpty } from 'lodash';

import { log } from '../../utils/logging';

import { Base } from './base';

export class ExtensionAdditionGroup extends Base {
  public componentTypeList: any[] /* TODO */;

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
  public toString(depth: number = 0): string {
    // TODO
    return null;
  }
}
