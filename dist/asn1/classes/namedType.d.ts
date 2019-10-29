import { IFormatConfig, IIe } from '../format/xlsx';
import { BuiltinValue } from '../visitors/builtinValue';
import { ConstraintSpec } from '../visitors/constraintSpec';
import { IModules } from '../visitors/modules';
import { IParameter } from '../visitors/parameter';
import { Base, IConstantAndModule } from './base';
import { IParameterMapping } from './definedType';
export declare class NamedType extends Base {
    name: string;
    type: Base;
    optional: boolean;
    default: BuiltinValue;
    tag?: string;
    constructor(name: string, type: Base);
    setConstraint(constraint: ConstraintSpec): NamedType;
    expand(asn1Pool: IModules, moduleName?: string, parameterList?: IParameter[]): NamedType;
    depthMax(): number;
    replaceParameters(parameterMapping: IParameterMapping[]): void;
    toString(): string;
    fillWorksheet(ieElem: IIe, ws: any, row: number, col: number, depthMax: number, constants: IConstantAndModule[], formatConfig: IFormatConfig, depth?: number): [number, number];
    private getOptionalString;
}
