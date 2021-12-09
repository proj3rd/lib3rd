import { MSG_ERR_CSN1_MALFORMED_SERIALIZATION } from "../constants";
import { Choice } from "./choice";
import { Concatenation } from "./concatenation";

function DefinitionFromObject(obj: unknown): Choice | Concatenation {
  const { csnTypeChoice } = obj as Partial<Choice>;
  if (csnTypeChoice) {
    return Choice.fromObject(obj);
  }
  const { csnTypeConcatenation } = obj as Partial<Concatenation>;
  if (csnTypeConcatenation) {
    return Concatenation.fromObject(obj);
  }
  throw Error(MSG_ERR_CSN1_MALFORMED_SERIALIZATION);
}

export class Definition {
  public name: string;
  public definition: Choice | Concatenation;

  public csnTypeDefinition = true;

  constructor(name: string, definition: Choice | Concatenation) {
    this.name = name;
    this.definition = definition;
  }

  public static fromObject(obj: unknown): Definition {
    const { name, definition: definitionObj, csnTypeDefinition } = obj as Definition;
    if (typeof name !== 'string' || !csnTypeDefinition) {
      throw Error(MSG_ERR_CSN1_MALFORMED_SERIALIZATION);
    }
    const definition = DefinitionFromObject(definitionObj);
    return new Definition(name, definition);
  }
}
