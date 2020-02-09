import { IFormatConfig, IIe } from '../format/xlsx';
import { IModules } from '../visitors/modules';
import { IParameter } from '../visitors/parameter';
import { Base, IConstantAndModule } from './base';
import { ObjectSetSpec } from './objectSetSpec';
export declare class ObjectSet extends Base {
    objectSetSpec: ObjectSetSpec;
    constructor(objectSetSpec: ObjectSetSpec);
    depthMax(): number;
    expand(asn1Pool: IModules, moduleName?: string, parameterList?: IParameter[]): ObjectSet;
    fillWorksheet(ieElem: IIe, ws: any, row: number, col: number, depthMax: number, constants: IConstantAndModule[], formatConfig: IFormatConfig, depth?: number): [number, number];
    replaceParameters(): void;
    setConstraint(): ObjectSet;
    toString(): string;
}
