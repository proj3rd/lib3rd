import { _Intersections } from './constraint';

export class Unions {
  public intersectionsList: _Intersections[];

  private unionsTag: undefined;

  constructor(intersections: _Intersections[]) {
    this.intersectionsList = intersections;
  }

  public toString(): string {
    return this.intersectionsList
      .map((intersections) => intersections.toString())
      .join(' |\n');
  }
}
