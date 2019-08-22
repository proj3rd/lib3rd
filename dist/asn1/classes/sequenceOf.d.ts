import { IFormatConfig, IIe } from '../format/xlsx';
import { AsnType } from './asnType';
import { NamedType } from './namedType';
export declare class SequenceOf extends AsnType {
    type: AsnType | NamedType;
    expandedType: AsnType | NamedType;
    size: number | string;
    sizeMin: number | string;
    sizeMax: number | string;
    constructor(type: AsnType | NamedType);
    setConstraint(constraint: any): SequenceOf;
    expand(asn1Pool: any, moduleName?: string, parameterList?: string[]): SequenceOf;
    depthMax(): number;
    replaceParameters(parameterMapping: {}): void;
    toString(): string;
    toStringUnexpanded(): string;
    fillWorksheet(ieElem: IIe, ws: any, row: number, col: number, depthMax: number, constants: any[], formatConfig: IFormatConfig, depth?: number): [number, number];
}
