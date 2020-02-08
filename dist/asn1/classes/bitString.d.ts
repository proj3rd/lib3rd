import { IFormatConfig, IIe } from '../format/xlsx';
import { BuiltinValue } from '../visitors/builtinValue';
import { ConstraintSpec } from '../visitors/constraintSpec';
import { IModules } from '../visitors/modules';
import { AsnType } from './asnType';
import { IConstantAndModule } from './base';
import { IParameterMapping } from './definedType';
export declare class BitString extends AsnType {
    namedBitList: any;
    size: BuiltinValue;
    sizeMin: BuiltinValue;
    sizeMax: BuiltinValue;
    setConstraint(constraint: ConstraintSpec): BitString;
    expand(asn1Pool: IModules, moduleName?: string): BitString;
    depthMax(): number;
    replaceParameters(paramterMapping: IParameterMapping[]): void;
    toString(): string;
    fillWorksheet(ieElem: IIe, ws: any, row: number, col: number, depthMax: number, constants: IConstantAndModule[], formatConfig: IFormatConfig, depth?: number): [number, number];
}
