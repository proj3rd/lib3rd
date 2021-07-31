import { unimpl } from 'unimpl';
import { MSG_ERR_ASN1_MALFORMED_SERIALIZATION } from '../constants';
import { IParameterMapping } from '../expander';
import { Modules } from './modules';

export class ObjectSetReference {
  public objectSetReference: string;

  public objectSetReferenceTag = true;

  constructor(objectSetReference: string) {
    this.objectSetReference = objectSetReference;
  }

  public static fromObject(obj: unknown): ObjectSetReference {
    const { objectSetReference, objectSetReferenceTag } = obj as ObjectSetReference;
    if (!objectSetReferenceTag) {
      throw Error(MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
    }
    if (typeof objectSetReference !== 'string') {
      throw Error(MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
    }
    return new ObjectSetReference(objectSetReference);
  }

  // eslint-disable-next-line class-methods-use-this, no-unused-vars
  public expand(modules: Modules, parameterMappings: IParameterMapping[]) {
    return unimpl();
  }

  // eslint-disable-next-line class-methods-use-this
  public getDepth(): number {
    return 0;
  }

  public toString(): string {
    return this.objectSetReference;
  }
}
