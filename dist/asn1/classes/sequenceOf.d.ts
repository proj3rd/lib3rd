import { IFormatConfig, IIe } from '../format/xlsx';
import { Base } from './base';
import { NamedType } from './namedType';
export declare class SequenceOf extends Base {
    type: NamedType;
    expandedType: NamedType;
    size: number | string;
    sizeMin: number | string;
    sizeMax: number | string;
    constructor(type: NamedType);
    setConstraint(constraint: any): SequenceOf;
    expand(asn1Pool: any, moduleName?: string): SequenceOf;
    depthMax(): number;
    toString(): string;
    toStringUnexpanded(): string;
    fillWorksheet(ieElem: IIe, ws: any, row: number, col: number, depthMax: number, constants: any[], formatConfig: IFormatConfig, depth?: number): [number, number];
}
