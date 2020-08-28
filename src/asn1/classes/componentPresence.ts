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
