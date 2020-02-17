import { IFormatConfig, IIe } from '../format/xlsx';
import { BuiltinValue } from '../visitors/builtinValue';
import { ConstraintSpec } from '../visitors/constraintSpec';
import { IModules } from '../visitors/modules';
import { IParameter } from '../visitors/parameter';
import { AsnType } from './asnType';
import { IConstantAndModule } from './base';
import { Constraint } from './constraint';
import { IParameterMapping } from './definedType';
export declare class ContainingEncodedByConstraint extends Constraint {
    containing: AsnType;
    encodedBy: BuiltinValue;
    constructor(containing: AsnType, encodedBy: BuiltinValue);
    depthMax(): number;
    expand(asn1Pool: IModules, moduleName?: string, parameterList?: IParameter[]): ContainingEncodedByConstraint;
    fillWorksheet(ieElem: IIe, ws: any, row: number, col: number, depthMax: number, constants: IConstantAndModule[], formatConfig: IFormatConfig, depth?: number): [number, number];
    replaceParameters(parameterMapping: IParameterMapping[]): void;
    setConstraint(constraints: Array<Constraint | ConstraintSpec>): ContainingEncodedByConstraint;
    toString(): string;
}
