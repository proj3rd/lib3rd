import { AsnSymbol } from './asnSymbol';
import { Assignment } from './assignment';
import { DefinitiveIdentification } from './definitiveIdentification';
import { Imports } from './imports';
export declare class ModuleDefinition implements IModuleBody {
    name: string;
    definitiveIdentification: DefinitiveIdentification;
    tagDefault: TagDefault;
    extensionDefault: ExtensionDefault;
    exports: Exports | null;
    imports: Imports | null;
    assignments: Assignment[];
    private moduleDefinitionTag;
    constructor(name: string, definitiveIdentification: DefinitiveIdentification, tagDefault: TagDefault, extensionDefault: ExtensionDefault, moduleBody: IModuleBody);
    findAssignment(name: string): Assignment | undefined;
    toString(): string;
}
export declare type TagDefault = 'EXPLICIT TAGS' | 'IMPLICIT TAGS' | 'AUTOMATIC TAGS' | '';
export declare type ExtensionDefault = 'EXTENSIBILITY IMPLIED' | '';
/**
 * This is intermediate interface used by a `ModuleBodyVisitor`
 */
export interface IModuleBody {
    exports: Exports | null;
    imports: Imports | null;
    assignments: Assignment[];
}
export declare type Exports = 'ALL' | AsnSymbol[];
//# sourceMappingURL=moduleDefinition.d.ts.map