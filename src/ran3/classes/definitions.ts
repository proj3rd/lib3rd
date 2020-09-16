import { Definition } from './definition';

export class Definitions {
  public definitionList: Definition[];

  constructor(definitionList: Definition[]) {
    this.definitionList = definitionList;
  }

  public findDefinition(sectionNumberOrName: string): Definition | undefined {
    const definition = this.definitionList.find((def) => {
      return def.sectionNumber === sectionNumberOrName || def.name === sectionNumberOrName;
    });
    return definition;
  }
}
