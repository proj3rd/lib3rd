export class BitString {
  public nameBitList: any; // TODO
  public size: number | string;
  public sizeMin: number | string;
  public sizeMax: number | string;

  public setConstraint(constraint: any): BitString {
    if ('value' in constraint) {
      this.size = constraint.value;
      this.sizeMin = null;
      this.sizeMax = null;
    }
    if ('min' in constraint && 'max' in constraint) {
      this.size = null;
      this.sizeMin = constraint.min;
      this.sizeMax = constraint.max;
    }
    return this;
  }

  public expand(): BitString {
    return this;
  }

  public toString(): string {
    const valueConstraint = this.size ? `(SIZE (${this.size}))` :
      this.sizeMin !== null && this.sizeMax !== null ? `(SIZE (${this.sizeMin}..${this.sizeMax}))` : '';
    return `BIT STRING ${valueConstraint}`;
  }
}
