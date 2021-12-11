import { MSG_ERR_CSN1_MALFORMED_SERIALIZATION } from "../constants";
import { Definition } from "./definition";

export class Definitions {
  public definitions: Definition[];

  public csnTypeDefinitions = true;

  constructor(definitions: Definition[] = []) {
    this.definitions = definitions;
  }

  public findDefinition(name: string, index: number = 0): Definition | undefined {
    return this.definitions.slice(index).find(
      (definition) => definition.name === name
    );
  }

  public static fromObject(obj: unknown): Definitions {
    const { definitions: definitionsObj, csnTypeDefinitions } = obj as Definitions;
    if (!(definitionsObj instanceof Array) || !csnTypeDefinitions) {
      throw Error(MSG_ERR_CSN1_MALFORMED_SERIALIZATION);
    }
    const definitions = definitionsObj.map((item) => Definition.fromObject(item));
    return new Definitions(definitions);
  }
}
