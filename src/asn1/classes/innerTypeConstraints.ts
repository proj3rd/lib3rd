import { ExtensionMarker } from './extensionMarker';

export class InnerTypeConstraints {
  public components: TypeConstraintsComponent[];

  private innerTypeConstraintsTag: undefined;

  constructor(components: TypeConstraintsComponent[]) {
    this.components = components;
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
}

export type TypeConstraintsComponent = ComponentPresence | ExtensionMarker;
