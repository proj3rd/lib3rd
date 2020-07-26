import { unimpl } from 'unimpl';

export class ObjectClassReference {
  public objectClassReference: string;

  private objectClassReferenceTag: undefined;

  constructor(objectClassReference: string) {
    this.objectClassReference = objectClassReference;
  }

  public toString(): string {
    return unimpl();
  }
}
