import { IFormatConfig, IIe } from '../format/xlsx';
import { IModules } from '../visitors/modules';
import { Unions } from '../visitors/unions';
import { Base, IConstantAndModule } from './base';
import { ObjectClass } from './objectClass';
import { Parameter } from './parameter';
export declare class ObjectSetSpec extends Base {
    objectSetSpec: Unions;
    constructor(objectSetSpec: Unions);
    depthMax(): number;
    expand(asn1Pool: IModules, moduleName?: string, parameterList?: Parameter[], classDefinition?: ObjectClass): ObjectSetSpec;
    fillWorksheet(ieElem: IIe, ws: any, row: number, col: number, depthMax: number, constants: IConstantAndModule[], formatConfig: IFormatConfig, depth?: number): [number, number];
    replaceParameters(): ObjectSetSpec;
    setConstraint(): ObjectSetSpec;
    toString(): string;
}
