export class ObjectSetReference {
  public objectSetReference: string;

  private objectSetReferenceTag: undefined;

  constructor(objectSetReference: string) {
    this.objectSetReference = objectSetReference;
  }

  public getDepth(): number {
    return 0;
  }

  public toString(): string {
    return this.objectSetReference;
  }
}
