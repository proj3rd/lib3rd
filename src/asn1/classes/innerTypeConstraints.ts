import { MSG_ERR_ASN1_MALFORMED_SERIALIZATION } from '../constants';
import { TypeConstraintsComponent, TypeConstraintsComponentFromObject } from '../types/typeConstraintsComponent';

/**
 * Currently it supports only MultipleTypeConstraints
 */
export class InnerTypeConstraints {
  public components: TypeConstraintsComponent[];

  public innerTypeConstraintsTag = true;

  constructor(components: TypeConstraintsComponent[]) {
    this.components = components;
  }

  public static fromObject(obj: unknown): InnerTypeConstraints {
    const { components: componentsObj, innerTypeConstraintsTag } = obj as InnerTypeConstraints;
    if (!innerTypeConstraintsTag) {
      throw Error(MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
    }
    if (!(componentsObj instanceof Array)) {
      throw Error(MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
    }
    const components = componentsObj.map((item) => TypeConstraintsComponentFromObject(item));
    return new InnerTypeConstraints(components);
  }

  public toString(): string {
    const componentsString = this.components
      .map((component) => component.toString())
      .join(', ');
    return `WITH COMPONENTS {${componentsString}}`;
  }
}
