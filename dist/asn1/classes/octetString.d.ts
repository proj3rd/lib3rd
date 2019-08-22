import { IFormatConfig, IIe } from '../format/xlsx';
import { AsnType } from './asnType';
export declare class OctetString extends AsnType {
    size: number | string;
    sizeMin: number | string;
    sizeMax: number | string;
    containing: any;
    setConstraint(constraint: any): OctetString;
    expand(asn1Pool: any, moduleName?: string): OctetString;
    depthMax(): number;
    replaceParameters(paramterMapping: {}): void;
    toString(): string;
    fillWorksheet(ieElem: IIe, ws: any, row: number, col: number, depthMax: number, constants: any[], formatConfig: IFormatConfig, depth?: number): [number, number];
}
