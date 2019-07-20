import { IFormatConfig, IIe } from '../format/xlsx';
import { Base } from './base';
export declare class Null extends Base {
    setConstraint(constraint: any): Null;
    expand(asn1Pool: any, moduleName?: string): Null;
    depthMax(): number;
    replaceParameters(paramterMapping: {}): void;
    toString(): string;
    fillWorksheet(ieElem: IIe, ws: any, row: number, col: number, depthMax: number, constants: any[], formatConfig: IFormatConfig, depth?: number): [number, number];
}
