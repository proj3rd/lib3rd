import { IFormatConfig, IIe } from '../format/xlsx';
import { AsnType } from './asnType';
import { NamedType } from './namedType';
export declare class Sequence extends AsnType {
    items: NamedType[];
    constructor(items: any[]);
    setConstraint(constraint: any): Sequence;
    expand(asn1Pool: any, moduleName?: string, parameterList?: string[]): Sequence;
    depthMax(): number;
    replaceParameters(parameterMapping: {}): void;
    toString(): string;
    fillWorksheet(ieElem: IIe, ws: any, row: number, col: number, depthMax: number, constants: any[], formatConfig: IFormatConfig, depth?: number): [number, number];
}
