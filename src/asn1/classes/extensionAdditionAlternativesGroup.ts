import { log } from '../../utils/logging';

import { Base } from './base';

export class ExtensionAdditionAlternativesGroup extends Base {
  public alternativeTypeList: any[] /* TODO */;

  constructor(alternativeTypeList: any, versionNumber: any) {
    super();

    this.alternativeTypeList = alternativeTypeList;
  }

  public setConstraint(constraint: any): ExtensionAdditionAlternativesGroup {
    log.info(`Enumerated constraint ${JSON.stringify(constraint)}`);

    return this;
  }

  public expand(): ExtensionAdditionAlternativesGroup {
    // TODO
    return this;
  }
  public toString(depth: number = 0): string {
    // TODO
    return null;
  }
}
