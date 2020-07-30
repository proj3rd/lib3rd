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

export class ComponentPresence {
  public name: string;
  public presence: 'ABSENT' | 'PRESENT';

  private componentPresenceTag: undefined;

  constructor(name: string, presence: 'ABSENT' | 'PRESENT') {
    if (presence !== 'ABSENT' && presence !== 'PRESENT') {
      throw Error();
    }
    this.name = name;
    this.presence = presence;
  }

  public toString(): string {
    return `${this.name} ${this.presence}`;
  }
}

export type TypeConstraintsComponent = ComponentPresence | ExtensionMarker;
