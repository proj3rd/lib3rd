import { IFormatConfig, IIe } from '../format/xlsx';
import { IConstraint } from '../visitors/elements';
import { IModules } from '../visitors/modules';
import { IParameter } from '../visitors/parameter';
import { Base, IConstantAndModule } from './base';
import { ExtensionMarker } from './extensionMarker';
export declare class ObjectSetSpec extends Base {
    objectSetSpec: Array<IConstraint | ExtensionMarker>;
    constructor(objectSetSpec: Array<IConstraint | ExtensionMarker>);
    depthMax(): number;
    expand(asn1Pool: IModules, moduleName?: string, parameterList?: IParameter[]): ObjectSetSpec;
    fillWorksheet(ieElem: IIe, ws: any, row: number, col: number, depthMax: number, constants: IConstantAndModule[], formatConfig: IFormatConfig, depth?: number): [number, number];
    replaceParameters(): void;
    setConstraint(): ObjectSetSpec;
    toString(): string;
}
