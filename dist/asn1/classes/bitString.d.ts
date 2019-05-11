import { IFormatConfig, IIe } from '../format/xlsx';
import { Base } from './base';
export declare class BitString extends Base {
    namedBitList: any;
    size: number | string;
    sizeMin: number | string;
    sizeMax: number | string;
    setConstraint(constraint: any): BitString;
    expand(): BitString;
    depthMax(): number;
    toString(): string;
    fillWorksheet(ieElem: IIe, ws: any, row: number, col: number, depthMax: number, constants: any[], formatConfig: IFormatConfig, depth?: number): [number, number];
}
