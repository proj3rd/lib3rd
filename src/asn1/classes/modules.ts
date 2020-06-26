import { ModuleDefinition } from './moduleDefinition';

export class Modules {
  public modules: ModuleDefinition[];

  private modulesTag: undefined;

  constructor(modules: ModuleDefinition[] = []) {
    this.modules = modules;
  }

  public toString(): string {
    return this.modules.map((module) => module.toString()).join('\n\n');
  }
}
