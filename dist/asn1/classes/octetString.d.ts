import { IFormatConfig, IIe } from '../format/xlsx';
import { Base } from './base';
export declare class OctetString extends Base {
    size: number | string;
    sizeMin: number | string;
    sizeMax: number | string;
    containing: any;
    setConstraint(constraint: any): OctetString;
    expand(asn1Pool: any, moduleName?: string): OctetString;
    depthMax(): number;
    toString(): string;
    fillWorksheet(ieElem: IIe, ws: any, row: number, col: number, depthMax: number, constants: any[], formatConfig: IFormatConfig, depth?: number): [number, number];
}
