import { Assignment } from './assignment';
import { ModuleDefinition } from './moduleDefinition';
export declare class Modules {
    modules: ModuleDefinition[];
    private modulesTag;
    constructor(modules?: ModuleDefinition[]);
    findAssignment(name: string, moduleName?: string): Assignment | undefined;
    toString(): string;
}
//# sourceMappingURL=modules.d.ts.map