import { cloneDeep } from 'lodash';
import { unimpl } from 'unimpl';
import { MSG_ERR_ASN1_MALFORMED_SERIALIZATION } from '../constants';
import { IParameterMapping } from '../expander';
import { Modules } from './modules';
import { ObjectClassAssignment } from './objectClassAssignment';
import { TypeAssignment } from './typeAssignment';

export class ExternalObjectSetReference {
  public moduleReference: string;
  public objectSetReference: string;

  public externalObjectSetReferenceTag = true;

  constructor(moduleReference: string, objectSetReference: string) {
    this.moduleReference = moduleReference;
    this.objectSetReference = objectSetReference;
  }

  public static fromObject(obj: unknown): ExternalObjectSetReference {
    const { moduleReference, objectSetReference, externalObjectSetReferenceTag } = obj as ExternalObjectSetReference;
    if (!externalObjectSetReferenceTag) {
      throw Error(MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
    }
    if (typeof moduleReference !== 'string') {
      throw Error(MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
    }
    if (typeof objectSetReference !== 'string') {
      throw Error(MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
    }
    return new ExternalObjectSetReference(moduleReference, objectSetReference);
  }

  /**
   * Find an Assignment indicated by ExternalObjectSetReference and
   * returns an expanded copy of it.
   * @param modules
   * @param parameterMappings
   */
  public expand(modules: Modules, parameterMappings: IParameterMapping[]) {
    if (parameterMappings.length) {
      return unimpl(this, parameterMappings);
    }
    const assignment = modules.findAssignment(
      this.objectSetReference,
      this.moduleReference,
    );
    if (assignment === undefined) {
      return this;
    }
    if (assignment instanceof TypeAssignment) {
      const expandedType = cloneDeep(cloneDeep(assignment.asnType).expand(modules, []));
      expandedType.reference = this.toString();
      return expandedType;
    }
    if (assignment instanceof ObjectClassAssignment) {
      const expandedType = cloneDeep(cloneDeep(assignment.objectClass).expand(modules, []));
      expandedType.reference = this.toString();
      return expandedType;
    }
    return unimpl(assignment);
  }

  // eslint-disable-next-line class-methods-use-this
  public getDepth(): number {
    return 0;
  }

  public toString(): string {
    return `${this.moduleReference}.${this.objectSetReference}`;
  }
}
