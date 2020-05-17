import { IFormatConfig, IIe } from '../format/xlsx';
import { BuiltinValue } from '../visitors/builtinValue';
import { ConstraintSpec } from '../visitors/constraintSpec';
import { IModules } from '../visitors/modules';
import { Base, IConstantAndModule } from './base';
import { Constraint } from './constraint';
import { IParameterMapping } from './definedType';
import { ObjectClass } from './objectClass';
import { Parameter } from './parameter';
export declare class SingleValue extends Base {
    value: BuiltinValue | ObjectClass;
    constructor(value: BuiltinValue);
    depthMax(): number;
    expand(asn1Pool: IModules, moduleName?: string, parameterList?: Parameter[], classDefinition?: ObjectClass): SingleValue;
    fillWorksheet(ieElem: IIe, ws: any, row: number, col: number, depthMax: number, constants: IConstantAndModule[], formatConfig: IFormatConfig, depth?: number): [number, number];
    replaceParameters(parameterMapping: IParameterMapping[]): SingleValue;
    setConstraint(constraints: Array<Constraint | ConstraintSpec>): SingleValue;
    toString(): string;
    private instantiateObjectClass;
}
