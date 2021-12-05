import { Choice } from "./choice";
import { Concatenation } from "./concatenation";

export class Definition {
  public name: string;
  public definition: Choice | Concatenation;

  public csnTypeDefinition = true;

  constructor(name: string, definition: Choice | Concatenation) {
    this.name = name;
    this.definition = definition;
  }
}
