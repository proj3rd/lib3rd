import { IParameterMapping } from '../expander';
import { Modules } from './modules';
export declare class ExtensionMarker {
    static getInstance(): ExtensionMarker;
    private static instance;
    private extensionMarkerTag;
    private constructor();
    expand(modules: Modules, parameterMappings: IParameterMapping[]): ExtensionMarker;
    toString(): string;
}
//# sourceMappingURL=extensionMarker.d.ts.map