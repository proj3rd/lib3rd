import { IFormatConfig, IIe } from '../format/xlsx';
import { Base } from './base';
export declare class Null extends Base {
    setConstraint(constraint: any): Null;
    expand(): Null;
    depthMax(): number;
    toString(): string;
    fillWorksheet(ieElem: IIe, ws: any, row: number, col: number, depthMax: number, constants: any[], formatConfig: IFormatConfig, depth?: number): [number, number];
}
