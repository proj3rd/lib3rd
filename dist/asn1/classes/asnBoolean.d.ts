import { IFormatConfig, IIe } from '../format/xlsx';
import { ConstraintSpec } from '../visitors/constraintSpec';
import { IModules } from '../visitors/modules';
import { AsnType } from './asnType';
import { IConstantAndModule } from './base';
import { Constraint } from './constraint';
import { IParameterMapping } from './definedType';
export declare class AsnBoolean extends AsnType {
    setConstraint(constraints: Array<Constraint | ConstraintSpec>): AsnBoolean;
    expand(asn1Pool: IModules, moduleName?: string): AsnBoolean;
    depthMax(): number;
    replaceParameters(parameterMapping: IParameterMapping[]): void;
    toString(): string;
    fillWorksheet(ieElem: IIe, ws: any, row: number, col: number, depthMax: number, constants: IConstantAndModule[], formatConfig: IFormatConfig, depth?: number): [number, number];
}
