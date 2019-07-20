import { IFormatConfig, IIe } from '../format/xlsx';
import { Base } from './base';
import { NamedType } from './namedType';
export declare class ExtensionAdditionAlternativesGroup extends Base {
    alternativeTypeList: NamedType[];
    constructor(alternativeTypeList: any, versionNumber: any);
    setConstraint(constraint: any): ExtensionAdditionAlternativesGroup;
    expand(asn1Pool: any, moduleName?: string, parameterList?: string[]): ExtensionAdditionAlternativesGroup;
    depthMax(): number;
    toString(): string;
    fillWorksheet(ieElem: IIe, ws: any, row: number, col: number, depthMax: number, constants: any[], formatConfig: IFormatConfig, depth?: number): [number, number];
}
