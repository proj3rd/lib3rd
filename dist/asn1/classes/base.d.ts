import { IFormatConfig, IIe } from '../format/xlsx';
import { BuiltinValue } from '../visitors/builtinValue';
import { ConstraintSpec } from '../visitors/constraintSpec';
import { IModules } from '../visitors/modules';
import { Constraint } from './constraint';
import { IParameterMapping } from './definedType';
import { Parameter } from './parameter';
export interface IConstantAndModule {
    constant: BuiltinValue;
    moduleName: string;
}
export declare abstract class Base {
    moduleName: string;
    abstract expand(asn1Pool: IModules, moduleName?: string, parameterList?: Parameter[]): Base;
    abstract depthMax(): number;
    abstract toString(): string;
    abstract fillWorksheet(ieElem: IIe, ws: any, row: number, col: number, depthMax: number, constants: IConstantAndModule[], formatConfig: IFormatConfig, depth?: number): [number, number];
    abstract setConstraint(constraints: Array<Constraint | ConstraintSpec>): Base;
    abstract replaceParameters(parameterMapping: IParameterMapping[], asn1Pool?: IModules, moduleName?: string): Base;
    protected indent(text: string): string;
    protected addToConstants(obj: BuiltinValue, constants: IConstantAndModule[]): void;
    protected getModuleNameToPass(moduleName?: string): string;
}
