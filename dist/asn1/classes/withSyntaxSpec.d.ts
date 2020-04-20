import { IFormatConfig, IIe } from '../format/xlsx';
import { ConstraintSpec } from '../visitors/constraintSpec';
import { IModules } from '../visitors/modules';
import { Base, IConstantAndModule } from './base';
import { Constraint } from './constraint';
import { IParameterMapping } from './definedType';
import { Parameter } from './parameter';
import { Syntax } from './syntax';
export declare class WithSyntaxSpec extends Base {
    syntaxList: Syntax[];
    constructor(syntaxList: Syntax[]);
    depthMax(): number;
    expand(asn1Pool: IModules, moduleName?: string, parameterList?: Parameter[]): WithSyntaxSpec;
    fillWorksheet(ieElem: IIe, ws: any, row: number, col: number, depthMax: number, constants: IConstantAndModule[], formatConfig: IFormatConfig, depth?: number): [number, number];
    replaceParameters(parameterMapping: IParameterMapping[]): WithSyntaxSpec;
    setConstraint(constraints: Array<Constraint | ConstraintSpec>): WithSyntaxSpec;
    toString(): string;
}
