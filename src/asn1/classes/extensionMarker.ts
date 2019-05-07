import { isEmpty } from 'lodash';

import { log } from '../../utils/logging';

import { Base } from './base';

export class ExtensionMarker extends Base {
  public setConstraint(constraint: any): ExtensionMarker {
    if (!isEmpty(constraint)) {
      log.warn(`ExtensionMarker could not handle constraint ${JSON.stringify(constraint)}`);
    }
    return this;
  }

  public expand(): ExtensionMarker {
    return this;
  }

  public getDepthMax(): number {
    return 1;
  }

  public toString(): string {
    return '...';
  }
}
