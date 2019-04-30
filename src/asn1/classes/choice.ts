import { log } from '../../utils/logging';

export class Choice {
  public choices: any[] /* TODO */;

  constructor(choices: any) {
    this.choices = choices;
  }

  public setConstraint(constraint: any): Choice {
    log.info(`Choice constraint ${JSON.stringify(constraint)}`);
    return this;
  }

  public expand(): Choice {
    // TODO
    return this;
  }

  public toString(): string {
    // TODO
    return null;
  }
}
