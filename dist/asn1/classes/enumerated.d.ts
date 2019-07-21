import { IFormatConfig, IIe } from '../format/xlsx';
import { Base } from './base';
export declare class Enumerated extends Base {
    items: any[];
    constructor(items: any[]);
    setConstraint(constraint: any): Enumerated;
    expand(asn1Pool: any, moduleName?: string): Enumerated;
    depthMax(): number;
    replaceParameters(parameterMapping: {}): void;
    toString(): string;
    fillWorksheet(ieElem: IIe, ws: any, row: number, col: number, depthMax: number, constants: any[], formatConfig: IFormatConfig, depth?: number): [number, number];
}
