import { IFormatConfig, IIe } from '../format/xlsx';
import { BuiltinValue } from '../visitors/builtinValue';
import { ConstraintSpec } from '../visitors/constraintSpec';
import { IModules } from '../visitors/modules';
import { INamedNumberList } from '../visitors/namedNumberList';
import { AsnType } from './asnType';
import { IConstantAndModule } from './base';
import { Constraint } from './constraint';
import { IParameterMapping } from './definedType';
export declare class Integer extends AsnType {
    namedNumberList: INamedNumberList;
    value: BuiltinValue;
    min: BuiltinValue;
    max: BuiltinValue;
    constructor(namedNumberList: INamedNumberList);
    setConstraint(constraints: Array<Constraint | ConstraintSpec>): Integer;
    expand(asn1Pool: IModules, moduleName?: string): Integer;
    depthMax(): number;
    replaceParameters(paramterMapping: IParameterMapping[]): void;
    toString(): string;
    fillWorksheet(ieElem: IIe, ws: any, row: number, col: number, depthMax: number, constants: IConstantAndModule[], formatConfig: IFormatConfig, depth?: number): [number, number];
}
