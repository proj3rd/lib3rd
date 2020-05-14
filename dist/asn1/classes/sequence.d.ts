import { IFormatConfig, IIe } from '../format/xlsx';
import { ConstraintSpec } from '../visitors/constraintSpec';
import { IModules } from '../visitors/modules';
import { AsnType } from './asnType';
import { IConstantAndModule } from './base';
import { Constraint } from './constraint';
import { IParameterMapping } from './definedType';
import { NamedType } from './namedType';
import { ObjectSet } from './objectSet';
import { Parameter } from './parameter';
export declare class Sequence extends AsnType {
    items: NamedType[];
    constructor(items: NamedType[]);
    setConstraint(constraints: Array<Constraint | ConstraintSpec>): Sequence;
    expand(asn1Pool: IModules, moduleName?: string, parameterList?: Parameter[]): Sequence;
    depthMax(): number;
    replaceParameters(parameterMapping: IParameterMapping[], asn1Pool: IModules, moduleName: string): Sequence | ObjectSet;
    toString(): string;
    fillWorksheet(ieElem: IIe, ws: any, row: number, col: number, depthMax: number, constants: IConstantAndModule[], formatConfig: IFormatConfig, depth?: number): [number, number];
}
