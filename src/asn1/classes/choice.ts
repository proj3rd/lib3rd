import { isEmpty } from 'lodash';

import { log } from '../../utils/logging';

import { Base } from './base';
import { NamedType } from './namedType';

export class Choice extends Base {
  public choices: NamedType[];

  constructor(choices: any) {
    super();

    this.choices = choices;
  }

  public setConstraint(constraint: any): Choice {
    if (!isEmpty(constraint)) {
      log.warn(`Choice constraint ${JSON.stringify(constraint)}`);
    }
    return this;
  }

  public expand(): Choice {
    // TODO
    return this;
  }

  public depthMax(): number {
    let depthMax = 1;
    this.choices.forEach((choice) => {
      depthMax = Math.max(depthMax, choice.depthMax() + 1);
    });
    return depthMax;
  }

  public toString(): string {
    return !this.choices.length ? 'CHOICE {}' : [
      'CHOICE {',
      this.choices.map((choice) => this.indent(choice.toString())).join(',\n'),
      '}',
    ].join('\n');
  }
}
