import { IFormatConfig, IIe } from '../format/xlsx';
import { Base } from './base';
import { NamedType } from './namedType';
export declare class Sequence extends Base {
    items: NamedType[];
    constructor(items: any[]);
    setConstraint(constraint: any): Sequence;
    expand(asn1Pool: any, moduleName?: string): Sequence;
    depthMax(): number;
    toString(): string;
    fillWorksheet(ieElem: IIe, ws: any, row: number, col: number, depthMax: number, constants: any[], formatConfig: IFormatConfig, depth?: number): [number, number];
}
