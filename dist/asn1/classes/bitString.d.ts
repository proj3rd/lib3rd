import { IFormatConfig, IIe } from '../format/xlsx';
import { AsnType } from './asnType';
export declare class BitString extends AsnType {
    namedBitList: any;
    size: number | string;
    sizeMin: number | string;
    sizeMax: number | string;
    setConstraint(constraint: any): BitString;
    expand(asn1Pool: any, moduleName?: string): BitString;
    depthMax(): number;
    replaceParameters(paramterMapping: {}): void;
    toString(): string;
    fillWorksheet(ieElem: IIe, ws: any, row: number, col: number, depthMax: number, constants: any[], formatConfig: IFormatConfig, depth?: number): [number, number];
}
