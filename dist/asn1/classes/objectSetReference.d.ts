import { IParameterMapping } from '../expander';
import { Modules } from './modules';
export declare class ObjectSetReference {
    objectSetReference: string;
    objectSetReferenceTag: boolean;
    constructor(objectSetReference: string);
    static fromObject(obj: unknown): ObjectSetReference;
    expand(modules: Modules, parameterMappings: IParameterMapping[]): never;
    getDepth(): number;
    toString(): string;
}
//# sourceMappingURL=objectSetReference.d.ts.map