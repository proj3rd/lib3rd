import { IFormatConfig, IIe } from '../format/xlsx';
import { IModules } from '../visitors/modules';
import { Base, IConstantAndModule } from './base';
import { DefinedObjectClass } from './definedObjectClass';
import { ObjectSetSpec } from './objectSetSpec';
import { Parameter } from './parameter';
export declare class ObjectSet extends Base {
    objectSetSpec: ObjectSetSpec;
    definedObjectClass: DefinedObjectClass;
    constructor(objectSetSpec: ObjectSetSpec);
    depthMax(): number;
    expand(asn1Pool: IModules, moduleName?: string, parameterList?: Parameter[]): ObjectSet;
    fillWorksheet(ieElem: IIe, ws: any, row: number, col: number, depthMax: number, constants: IConstantAndModule[], formatConfig: IFormatConfig, depth?: number): [number, number];
    replaceParameters(): void;
    setConstraint(): ObjectSet;
    toString(): string;
}
