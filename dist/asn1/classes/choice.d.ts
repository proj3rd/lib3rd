import { IFormatConfig, IIe } from '../format/xlsx';
import { AlternativeTypeLists } from '../visitors/alternativeTypeLists';
import { AsnType } from './asnType';
export declare class Choice extends AsnType {
    choices: AlternativeTypeLists;
    constructor(choices: AlternativeTypeLists);
    setConstraint(constraint: any): Choice;
    expand(asn1Pool: any, moduleName?: string, parameterList?: string[]): Choice;
    depthMax(): number;
    replaceParameters(parameterMapping: {}): void;
    toString(): string;
    fillWorksheet(ieElem: IIe, ws: any, row: number, col: number, depthMax: number, constants: any[], formatConfig: IFormatConfig, depth?: number): [number, number];
}
