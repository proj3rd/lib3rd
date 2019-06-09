import { IFormatConfig, IIe } from '../format/xlsx';
import { Base } from './base';
import { NamedType } from './namedType';
export declare class ExtensionAdditionGroup extends Base {
    componentTypeList: NamedType[];
    constructor(alternativeTypeList: any, versionNumber: any);
    setConstraint(constraint: any): ExtensionAdditionGroup;
    expand(asn1Pool: any, moduleName?: string): ExtensionAdditionGroup;
    depthMax(): number;
    toString(): string;
    fillWorksheet(ieElem: IIe, ws: any, row: number, col: number, depthMax: number, constants: any[], formatConfig: IFormatConfig, depth?: number): [number, number];
}
