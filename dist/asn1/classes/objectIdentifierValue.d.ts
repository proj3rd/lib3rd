import { IFormatConfig, IIe } from '../format/xlsx';
import { ConstraintSpec } from '../visitors/constraintSpec';
import { IModules } from '../visitors/modules';
import { Base, IConstantAndModule } from './base';
import { IParameterMapping } from './definedType';
import { Parameter } from './parameter';
export declare class ObjectIdentifierValue extends Base {
    objIdComponentsList: any[];
    constructor(objIdComponentsList: any[]);
    depthMax(): number;
    expand(asn1Pool: IModules, moduleName?: string, parameterList?: Parameter[]): ObjectIdentifierValue;
    fillWorksheet(ieElem: IIe, ws: any, row: number, col: number, depthMax: number, constants: IConstantAndModule[], formatConfig: IFormatConfig, depth?: number): [number, number];
    replaceParameters(parameterMapping: IParameterMapping[]): void;
    setConstraint(constraint: ConstraintSpec): ObjectIdentifierValue;
    toString(): string;
}
