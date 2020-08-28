import { ComponentPresence } from './componentPresence';
import { ExtensionMarker } from './extensionMarker';

/**
 * Currently it supports only MultipleTypeConstraints
 */
export class InnerTypeConstraints {
  public components: TypeConstraintsComponent[];

  private innerTypeConstraintsTag: undefined;

  constructor(components: TypeConstraintsComponent[]) {
    this.components = components;
  }

  public toString(): string {
    const componentsString = this.components
      .map((component) => component.toString())
      .join(', ');
    return `WITH COMPONENTS {${componentsString}}`;
  }
}

export type TypeConstraintsComponent = ComponentPresence | ExtensionMarker;
