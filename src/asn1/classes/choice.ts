import { isEmpty } from 'lodash';

import { log } from '../../utils/logging';

import { Base } from './base';

export class Choice extends Base {
  public choices: any[] /* TODO */;

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

  public toString(depth: number = 0): string {
    const contentStrings = this.choices.map((choice: any) => {
      return choice.toString(depth + 1);
    });
    return `CHOICE ${['{', ...contentStrings, '}'].join(',\n')}`;
  }
}
