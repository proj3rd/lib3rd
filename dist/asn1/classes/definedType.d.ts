import { IFormatConfig, IIe } from '../format/xlsx';
import { ActualParameter } from '../visitors/actualParameter';
import { ConstraintSpec } from '../visitors/constraintSpec';
import { IModules } from '../visitors/modules';
import { IParameter } from '../visitors/parameter';
import { AsnType } from './asnType';
import { Base, IConstantAndModule } from './base';
import { WithComponents } from './withComponents';
export interface IParameterMapping {
    parameter: IParameter;
    actualParameter: ActualParameter;
}
export declare class DefinedType extends AsnType {
    moduleReference: string;
    typeReference: string;
    actualParameterList: ActualParameter[];
    withComponents: WithComponents;
    setConstraint(constraint: ConstraintSpec): DefinedType;
    expand(asn1Pool: IModules, moduleName?: string, parameterList?: IParameter[]): Base;
    depthMax(): number;
    replaceParameters(parameterMapping: IParameterMapping[]): void;
    toString(): string;
    fillWorksheet(ieElem: IIe, ws: any, row: number, col: number, depthMax: number, constants: IConstantAndModule[], formatConfig: IFormatConfig, depth?: number): [number, number];
    private getActualParameterListString;
}
