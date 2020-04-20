import { IFormatConfig, IIe } from '../format/xlsx';
import { ConstraintSpec } from '../visitors/constraintSpec';
import { IModules } from '../visitors/modules';
import { Base, IConstantAndModule } from './base';
import { Constraint } from './constraint';
import { IParameterMapping } from './definedType';
export declare class Parameter extends Base {
    paramGovernor: any;
    dummyReference: string;
    constructor(paramGovernor: any, dummyReference: string);
    expand(asn1Pool: IModules, moduleName?: string, parameterList?: Parameter[]): Parameter;
    depthMax(): number;
    fillWorksheet(ieElem: IIe, ws: any, row: number, col: number, depthMax: number, constants: IConstantAndModule[], formatConfig: IFormatConfig, depth?: number): [number, number];
    replaceParameters(parameterMapping: IParameterMapping[]): Parameter;
    setConstraint(constraints: Array<Constraint | ConstraintSpec>): Parameter;
    toString(): string;
}
