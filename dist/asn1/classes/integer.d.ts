import { IFormatConfig, IIe } from '../format/xlsx';
import { Base } from './base';
export declare class Integer extends Base {
    namedNumberList: any;
    value: number | string;
    min: number | string;
    max: number | string;
    setConstraint(constraint: any): Integer;
    expand(asn1Pool: any, moduleName?: string): Integer;
    depthMax(): number;
    replaceParameters(paramterMapping: {}): void;
    toString(): string;
    fillWorksheet(ieElem: IIe, ws: any, row: number, col: number, depthMax: number, constants: any[], formatConfig: IFormatConfig, depth?: number): [number, number];
}
