import { MSG_ERR_ASN1_MALFORMED_SERIALIZATION } from "../constants";

/**
 * X.681 clause 7.1
 */
export class ObjectClassReference {
  public objectClassReference: string;

  public objectClassReferenceTag = true;

  constructor(objectClassReference: string) {
    this.objectClassReference = objectClassReference;
  }

  public static fromObject(obj: unknown): ObjectClassReference {
    const {
      objectClassReference: objectClassReferenceObject,
      objectClassReferenceTag,
    } = obj as ObjectClassReference;
    if (!objectClassReferenceTag) {
      throw Error(MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
    }
    if (typeof objectClassReferenceObject !== 'string') {
      throw Error(MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
    }
    return new ObjectClassReference(objectClassReferenceObject);
  }

  public toString(): string {
    return this.objectClassReference;
  }
}
