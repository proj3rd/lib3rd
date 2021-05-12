import { MSG_ERR_ASN1_MALFORMED_SERIALIZATION } from "../constants";

export class ComponentPresence {
  public name: string;
  public presence: 'ABSENT' | 'PRESENT';

  public componentPresenceTag = true;

  constructor(name: string, presence: 'ABSENT' | 'PRESENT') {
    if (presence !== 'ABSENT' && presence !== 'PRESENT') {
      throw Error();
    }
    this.name = name;
    this.presence = presence;
  }

  public static fromObject(obj: unknown): ComponentPresence {
    const { name, presence } = obj as ComponentPresence;
    if (typeof name !== 'string' || typeof presence !== 'string') {
      throw Error(MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
    }
    return new ComponentPresence(name, presence);
  }

  public toString(): string {
    return `${this.name} ${this.presence}`;
  }
}
