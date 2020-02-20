import { IFormatConfig, IIe } from '../format/xlsx';
import { ConstraintSpec } from '../visitors/constraintSpec';
import { Enumerations } from '../visitors/enumerations';
import { IModules } from '../visitors/modules';
import { AsnType } from './asnType';
import { IConstantAndModule } from './base';
import { Constraint } from './constraint';
import { IParameterMapping } from './definedType';
export declare class Enumerated extends AsnType {
    items: Enumerations;
    constructor(items: Enumerations);
    setConstraint(constraints: Array<Constraint | ConstraintSpec>): Enumerated;
    expand(asn1Pool: IModules, moduleName?: string): Enumerated;
    depthMax(): number;
    replaceParameters(parameterMapping: IParameterMapping[]): void;
    toString(): string;
    fillWorksheet(ieElem: IIe, ws: any, row: number, col: number, depthMax: number, constants: IConstantAndModule[], formatConfig: IFormatConfig, depth?: number): [number, number];
}
