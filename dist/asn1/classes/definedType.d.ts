import { IFormatConfig, IIe } from '../format/xlsx';
import { ActualParameter } from '../visitors/actualParameter';
import { ConstraintSpec } from '../visitors/constraintSpec';
import { IModules } from '../visitors/modules';
import { AsnType } from './asnType';
import { IConstantAndModule } from './base';
import { Constraint } from './constraint';
import { Parameter } from './parameter';
import { WithComponents } from './withComponents';
export interface IParameterMapping {
    parameter: Parameter;
    actualParameter: ActualParameter;
}
export declare class DefinedType extends AsnType {
    moduleReference: string;
    typeReference: string;
    actualParameterList: ActualParameter[];
    withComponents: WithComponents;
    setConstraint(constraints: Array<Constraint | ConstraintSpec>): DefinedType;
    expand(asn1Pool: IModules, moduleName?: string, parameterList?: Parameter[]): Base;
    depthMax(): number;
    replaceParameters(parameterMapping: IParameterMapping[]): DefinedType;
    toString(): string;
    fillWorksheet(ieElem: IIe, ws: any, row: number, col: number, depthMax: number, constants: IConstantAndModule[], formatConfig: IFormatConfig, depth?: number): [number, number];
    private getActualParameterListString;
}
