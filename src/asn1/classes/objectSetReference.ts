import { unimpl } from 'unimpl';
import { IParameterMapping } from '../expander';
import { Modules } from './modules';

export class ObjectSetReference {
  public objectSetReference: string;

  private objectSetReferenceTag: undefined;

  constructor(objectSetReference: string) {
    this.objectSetReference = objectSetReference;
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
