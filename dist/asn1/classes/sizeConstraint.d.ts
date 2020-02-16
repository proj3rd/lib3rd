import { IFormatConfig, IIe } from '../format/xlsx';
import { ConstraintSpec } from '../visitors/constraintSpec';
import { IModules } from '../visitors/modules';
import { IParameter } from '../visitors/parameter';
import { IConstantAndModule } from './base';
import { Constraint } from './constraint';
import { IParameterMapping } from './definedType';
import { SingleValue } from './SingleValue';
import { ValueRange } from './valueRange';
export declare class SizeConstraint extends Constraint {
    sizeConstraint: SingleValue | ValueRange;
    constructor(sizeConstraint: SingleValue | ValueRange);
    depthMax(): number;
    expand(asn1Pool: IModules, moduleName?: string, parameterList?: IParameter[]): SizeConstraint;
    fillWorksheet(ieElem: IIe, ws: any, row: number, col: number, depthMax: number, constants: IConstantAndModule[], formatConfig: IFormatConfig, depth?: number): [number, number];
    replaceParameters(parameterMapping: IParameterMapping[]): void;
    setConstraint(constraints: Array<Constraint | ConstraintSpec>): SizeConstraint;
    toString(): string;
}
