import { IFormatConfig, IIe } from '../format/xlsx';
import { AsnType } from './asnType';
export declare class Integer extends AsnType {
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
