import { todo } from 'unimpl';
import { DefinedObjectSet } from '../types';
import { AtNotation } from './atNotation';

export class ComponentRelationConstraint {
  public definedObjectSet: DefinedObjectSet;
  public atNotations: AtNotation[];

  private componentRelationConstraintTag: undefined;

  constructor(definedObjectSet: DefinedObjectSet, atNotations: AtNotation[]) {
    this.definedObjectSet = definedObjectSet;
    this.atNotations = atNotations;
  }
  public toString(): string {
    return todo();
  }
}
