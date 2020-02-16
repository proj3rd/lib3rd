import { IFormatConfig, IIe } from '../format/xlsx';
import { AlternativeTypeLists } from '../visitors/alternativeTypeLists';
import { ConstraintSpec } from '../visitors/constraintSpec';
import { IModules } from '../visitors/modules';
import { IParameter } from '../visitors/parameter';
import { AsnType } from './asnType';
import { IConstantAndModule } from './base';
import { Constraint } from './constraint';
import { IParameterMapping } from './definedType';
export declare class Choice extends AsnType {
    choices: AlternativeTypeLists;
    constructor(choices: AlternativeTypeLists);
    setConstraint(constraints: Array<Constraint | ConstraintSpec>): Choice;
    expand(asn1Pool: IModules, moduleName?: string, parameterList?: IParameter[]): Choice;
    depthMax(): number;
    replaceParameters(parameterMapping: IParameterMapping[]): void;
    toString(): string;
    fillWorksheet(ieElem: IIe, ws: any, row: number, col: number, depthMax: number, constants: IConstantAndModule[], formatConfig: IFormatConfig, depth?: number): [number, number];
}
