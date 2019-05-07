import { isEmpty } from 'lodash';

import { log } from '../../utils/logging';

import { Base } from './base';
import { WithComponents } from './withComponents';

export class DefinedType extends Base {
  public moduleReference: string;
  public typeReference: string;
  public withComponents: WithComponents;

  public setConstraint(constraint: any): DefinedType {
    if ('withComponents' in constraint) {
      this.withComponents = new WithComponents(constraint.withComponents);
      delete constraint.withComponents;
    }
    if (!isEmpty(constraint)) {
      log.warn(`DefinedType could not handle constraint ${JSON.stringify(constraint)}`);
    }
    return this;
  }

  public expand(): DefinedType {
    // TODO
    return this;
  }

  public depthMax(): number {
    return 1;
  }

  public toString(): string {
    const withComponents = !this.withComponents ? '' :
      ` (WITH COMPONENTS ${this.withComponents.toString()}`;
    return `${this.moduleReference ? this.moduleReference + '.' : ''}${this.typeReference}${withComponents}`;
  }
}
