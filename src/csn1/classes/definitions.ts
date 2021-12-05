import { Definition } from "./definition";

export class Definitions {
  public definitions: Definition[];

  public csnTypeDefinitions = true;

  constructor(definitions: Definition[] = []) {
    this.definitions = definitions;
  }
}
