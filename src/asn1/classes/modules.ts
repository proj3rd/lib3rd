import { unimpl } from '../../_devUtils';
import { Assignment } from './assignment';
import { ModuleDefinition } from './moduleDefinition';

export class Modules {
  public modules: ModuleDefinition[];

  private modulesTag: undefined;

  constructor(modules: ModuleDefinition[] = []) {
    this.modules = modules;
  }

  public findAssignment(
    name: string,
    moduleName?: string
  ): Assignment | undefined {
    let assignment: Assignment | undefined;
    if (moduleName !== undefined) {
      return unimpl();
    }
    this.modules.forEach((module) => {
      if (assignment !== undefined) {
        return;
      }
      assignment = module.findAssignment(name);
    });
    return assignment;
  }

  public toString(): string {
    return this.modules.map((module) => module.toString()).join('\n\n');
  }
}
