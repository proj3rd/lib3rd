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
    return this;
  }

  public expand(): ComponentPresence {
    return this;
  }

  public toString(depth: number = 0): string {
    // TODO
    return null;
  }
}
