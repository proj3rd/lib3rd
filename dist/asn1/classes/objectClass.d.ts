import { IFormatConfig, IIe } from '../format/xlsx';
import { ConstraintSpec } from '../visitors/constraintSpec';
import { IModules } from '../visitors/modules';
import { Base, IConstantAndModule } from './base';
import { Constraint } from './constraint';
import { IParameterMapping } from './definedType';
import { FieldSpec } from './fieldSpec';
import { Parameter } from './parameter';
import { WithSyntaxSpec } from './withSyntaxSpec';
export declare class ObjectClass extends Base {
    fieldSpecs: FieldSpec[];
    withSyntaxSpec: WithSyntaxSpec;
    constructor(fieldSpec: FieldSpec[], withSyntaxSpec?: WithSyntaxSpec);
    depthMax(): number;
    expand(asn1Pool: IModules, moduleName?: string, parameterList?: Parameter[]): ObjectClass;
    fillWorksheet(ieElem: IIe, ws: any, row: number, col: number, depthMax: number, constants: IConstantAndModule[], formatConfig: IFormatConfig, depth?: number): [number, number];
    replaceParameters(parameterMapping: IParameterMapping[]): void;
    setConstraint(constraints: Array<Constraint | ConstraintSpec>): ObjectClass;
    toString(): string;
}
