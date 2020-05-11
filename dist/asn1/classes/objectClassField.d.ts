import { IFormatConfig, IIe } from '../format/xlsx';
import { ConstraintSpec } from '../visitors/constraintSpec';
import { IModules } from '../visitors/modules';
import { AsnType } from './asnType';
import { IConstantAndModule } from './base';
import { Constraint } from './constraint';
import { IParameterMapping } from './definedType';
export declare class ObjectClassField extends AsnType {
    moduleReference: string;
    objectClassReference: string;
    fieldName: string;
    alias: string;
    typeReference: string;
    constructor(moduleReference: string, objectClassReference: string, fieldName: string);
    setConstraint(constraints: Array<Constraint | ConstraintSpec>): ObjectClassField;
    expand(asn1Pool: IModules, moduleName?: string): ObjectClassField;
    depthMax(): number;
    replaceParameters(parameterMapping: IParameterMapping[]): ObjectClassField;
    toString(): string;
    fillWorksheet(ieElem: IIe, ws: any, row: number, col: number, depthMax: number, constants: IConstantAndModule[], formatConfig: IFormatConfig, depth?: number): [number, number];
}
