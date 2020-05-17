import { IFormatConfig, IIe } from '../format/xlsx';
import { BuiltinValue } from '../visitors/builtinValue';
import { ConstraintSpec } from '../visitors/constraintSpec';
import { IModules } from '../visitors/modules';
import { Base, IConstantAndModule } from './base';
import { Constraint } from './constraint';
import { IParameterMapping } from './definedType';
import { Parameter } from './parameter';
interface IValueRange {
    min?: BuiltinValue;
    max?: BuiltinValue;
}
export declare class ValueRange extends Base {
    min: BuiltinValue;
    max: BuiltinValue;
    constructor(valueRange: IValueRange);
    depthMax(): number;
    expand(asn1Pool: IModules, moduleName?: string, parameterList?: Parameter[]): ValueRange;
    fillWorksheet(ieElem: IIe, ws: any, row: number, col: number, depthMax: number, constants: IConstantAndModule[], formatConfig: IFormatConfig, depth?: number): [number, number];
    replaceParameters(parameterMapping: IParameterMapping[]): ValueRange;
    setConstraint(constraints: Array<Constraint | ConstraintSpec>): ValueRange;
    toString(): string;
}
export {};
