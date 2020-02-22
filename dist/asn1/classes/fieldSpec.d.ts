import { IFormatConfig, IIe } from '../format/xlsx';
import { BuiltinValue } from '../visitors/builtinValue';
import { ConstraintSpec } from '../visitors/constraintSpec';
import { IOptionalitySpec } from '../visitors/fieldSpec';
import { IModules } from '../visitors/modules';
import { AsnType } from './asnType';
import { Base, IConstantAndModule } from './base';
import { Constraint } from './constraint';
import { IParameterMapping } from './definedType';
import { Parameter } from './parameter';
export declare class FieldSpec extends Base {
    reference: string;
    type: AsnType;
    unique: boolean;
    optional: boolean;
    default: AsnType | BuiltinValue;
    /**
     * WITH SYNTAX {
     *   &alias    reference
     * }
     */
    alias: string;
    constructor(reference: string, type: AsnType, unique: boolean, optionalitySpec?: IOptionalitySpec);
    depthMax(): number;
    expand(asn1Pool: IModules, moduleName?: string, parameterList?: Parameter[]): FieldSpec;
    fillWorksheet(ieElem: IIe, ws: any, row: number, col: number, depthMax: number, constants: IConstantAndModule[], formatConfig: IFormatConfig, depth?: number): [number, number];
    replaceParameters(parameterMapping: IParameterMapping[]): void;
    setConstraint(constraints: Array<Constraint | ConstraintSpec>): FieldSpec;
    toString(): string;
}
