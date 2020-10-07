import { cloneDeep } from 'lodash';
import { unimpl } from 'unimpl';
import { IParameterMapping } from '../expander';
import { Modules } from './modules';
import { ObjectClassAssignment } from './objectClassAssignment';
import { TypeAssignment } from './typeAssignment';

export class ExternalObjectSetReference {
  public moduleReference: string;
  public objectSetReference: string;

  private externalObjectSetReferenceTag: undefined;

  constructor(moduleReference: string, objectSetReference: string) {
    this.moduleReference = moduleReference;
    this.objectSetReference = objectSetReference;
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
      return cloneDeep(assignment.asnType).expand(modules, []);
    }
    if (assignment instanceof ObjectClassAssignment) {
      return cloneDeep(assignment.objectClass).expand(modules, []);
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
