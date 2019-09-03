import { IFormatConfig, IIe } from '../format/xlsx';
import { BuiltinValue } from '../visitors/builtinValue';
import { ConstraintSpec } from '../visitors/constraintSpec';
import { IModules } from '../visitors/modules';
import { Base, IConstantAndModule } from './base';
export declare class NamedType extends Base {
    name: string;
    type: Base;
    optional: boolean;
    default: BuiltinValue;
    tag?: string;
    constructor(name: string, type: Base);
    setConstraint(constraint: ConstraintSpec): NamedType;
    expand(asn1Pool: IModules, moduleName?: string, parameterList?: string[]): NamedType;
    depthMax(): number;
    replaceParameters(parameterMapping: {}): void;
    toString(): string;
    fillWorksheet(ieElem: IIe, ws: any, row: number, col: number, depthMax: number, constants: IConstantAndModule[], formatConfig: IFormatConfig, depth?: number): [number, number];
    private getOptionalString;
}
