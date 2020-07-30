/**
 * X.681 clause 7.1
 */
export class ObjectClassReference {
  public objectClassReference: string;

  private objectClassReferenceTag: undefined;

  constructor(objectClassReference: string) {
    this.objectClassReference = objectClassReference;
  }

  public toString(): string {
    return this.objectClassReference;
  }
}
