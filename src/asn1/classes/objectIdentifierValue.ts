import { todo } from 'unimpl';
import { ObjectIdComponents } from '../types';

export class ObjectIdentifierValue {
  public objectIdComponentsList: ObjectIdComponents[];

  private objectIdentifierValueTag: undefined;

  constructor(objectIdComponentsList: ObjectIdComponents[]) {
    this.objectIdComponentsList = objectIdComponentsList;
  }

  public toString(): string {
    return todo();
  }
}
