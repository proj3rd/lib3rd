export interface IDefinitiveObjIdComponent {
  name: string;
  number: string;
}

export class DefinitiveIdentification {
  public definitiveOID: IDefinitiveObjIdComponent[];

  private definitiveIdentificationTag: undefined;

  constructor(definitiveOID: IDefinitiveObjIdComponent[]) {
    this.definitiveOID = definitiveOID;
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
