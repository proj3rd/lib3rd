import { isEmpty } from 'lodash';

import { log } from '../../utils/logging';

import { Base } from './base';
import { ComponentPresence } from './componentPresence';
import { ExtensionMarker } from './extensionMarker';

export class WithComponents extends Base {
  public components: Array<ExtensionMarker | ComponentPresence>;

  constructor(components: Array<ExtensionMarker | ComponentPresence>) {
    super();

    this.components = components;
  }

  public setConstraint(constraint: any): WithComponents {
    if (!isEmpty(constraint)) {
      log.warn(`WithComponents could not handle constraint ${JSON.stringify(constraint)}`);
    }
    return this;
  }

  public expand(): WithComponents {
    return this;
  }

  public depthMax(): number {
    // Depth of this class is not valid
    return 0;
  }

  public toString(): string {
    // TODO
    return `{${this.components.map((component) => component.toString()).join(', ')}}`;
  }
}
