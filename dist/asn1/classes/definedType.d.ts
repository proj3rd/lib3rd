import { IFormatConfig, IIe } from '../format/xlsx';
import { Base } from './base';
import { WithComponents } from './withComponents';
export declare class DefinedType extends Base {
    moduleReference: string;
    typeReference: string;
    actualParameterList: any[];
    withComponents: WithComponents;
    setConstraint(constraint: any): DefinedType;
    expand(asn1Pool: any, moduleName?: string, parameterList?: string[]): Base;
    depthMax(): number;
    replaceParameters(parameterMapping: {}): void;
    toString(): string;
    fillWorksheet(ieElem: IIe, ws: any, row: number, col: number, depthMax: number, constants: any[], formatConfig: IFormatConfig, depth?: number): [number, number];
    private getActualParameterListString;
}
