export class ObjectSetReference {
  public objectSetReference: string;

  private objectSetReferenceTag: undefined;

  constructor(objectSetReference: string) {
    this.objectSetReference = objectSetReference;
  }

  public toString(): string {
    return this.objectSetReference;
  }
}
