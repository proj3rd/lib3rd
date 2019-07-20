import { IFormatConfig, IIe } from '../format/xlsx';
import { Base } from './base';
import { NamedType } from './namedType';
export declare class Choice extends Base {
    choices: NamedType[];
    constructor(choices: any);
    setConstraint(constraint: any): Choice;
    expand(asn1Pool: any, moduleName?: string, parameterList?: string[]): Choice;
    depthMax(): number;
    toString(): string;
    fillWorksheet(ieElem: IIe, ws: any, row: number, col: number, depthMax: number, constants: any[], formatConfig: IFormatConfig, depth?: number): [number, number];
}
