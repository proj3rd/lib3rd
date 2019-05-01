import { Base } from './base';

export class ExtensionMarker extends Base {
  public setConstraint(constraint: any): ExtensionMarker {
    return this;
  }

  public expand(): ExtensionMarker {
    return this;
  }

  public toString(depth: number = 0): string {
    return '...';
  }
}
