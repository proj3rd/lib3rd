import { IFormatConfig, IIe } from '../format/xlsx';
import { BuiltinValue } from '../visitors/builtinValue';
import { ConstraintSpec } from '../visitors/constraintSpec';
import { IModules } from '../visitors/modules';
import { AsnType } from './asnType';
import { IConstantAndModule } from './base';
export declare class Integer extends AsnType {
    namedNumberList: any;
    value: BuiltinValue;
    min: BuiltinValue;
    max: BuiltinValue;
    setConstraint(constraint: ConstraintSpec): Integer;
    expand(asn1Pool: IModules, moduleName?: string): Integer;
    depthMax(): number;
    replaceParameters(paramterMapping: {}): void;
    toString(): string;
    fillWorksheet(ieElem: IIe, ws: any, row: number, col: number, depthMax: number, constants: IConstantAndModule[], formatConfig: IFormatConfig, depth?: number): [number, number];
}
