import { MSG_ERR_ASN1_MALFORMED_SERIALIZATION } from "../constants";
import { DefinitiveObjIdComponentFromObject, IDefinitiveObjIdComponent } from "../types/definitiveObjIdComponent";

export class DefinitiveIdentification {
  public definitiveOID: IDefinitiveObjIdComponent[];

  public definitiveIdentificationTag = true;

  constructor(definitiveOID: IDefinitiveObjIdComponent[]) {
    this.definitiveOID = definitiveOID;
  }

  public static fromObject(obj: unknown) {
    const { definitiveOID: definitiveOIDObjectList, definitiveIdentificationTag } = obj as DefinitiveIdentification;
    if (!definitiveIdentificationTag) {
      throw Error(MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
    }
    if (!(definitiveOIDObjectList instanceof Array)) {
      throw Error(MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
    }
    const definitionOID = definitiveOIDObjectList.map((item) => DefinitiveObjIdComponentFromObject(item));
    return new DefinitiveIdentification(definitionOID);
  }

  public toString(): string {
    if (this.definitiveOID.length === 0) {
      return '';
    }
    const innerString = this.definitiveOID
      .map((item) => `${item.name} (${item.number})`)
      .join(' ');
    return `{${innerString}}`;
  }
}
