import { IFormatConfig, IIe } from '../format/xlsx';
import { ConstraintSpec } from '../visitors/constraintSpec';
import { IModules } from '../visitors/modules';
import { IConstantAndModule } from './base';
import { Constraint } from './constraint';
import { IParameterMapping } from './definedType';
export declare class TableConstraint extends Constraint {
    moduleReference: string;
    objectSetReference: string;
    atNotations: string[];
    constructor(moduleReference: string, objectSetReference: string, atNotations?: string[]);
    setConstraint(constraints: Array<Constraint | ConstraintSpec>): never;
    expand(asn1Pool: IModules, moduleName?: string): never;
    depthMax(): never;
    replaceParameters(parameterMapping: IParameterMapping[]): never;
    toString(): string;
    fillWorksheet(ieElem: IIe, ws: any, row: number, col: number, depthMax: number, constants: IConstantAndModule[], formatConfig: IFormatConfig, depth?: number): never;
}
