import { IFormatConfig, IIe } from '../format/xlsx';
import { ConstraintSpec } from '../visitors/constraintSpec';
import { IModules } from '../visitors/modules';
import { AsnType } from './asnType';
import { IConstantAndModule } from './base';
import { NamedType } from './namedType';
export declare class Sequence extends AsnType {
    items: NamedType[];
    constructor(items: NamedType[]);
    setConstraint(constraint: ConstraintSpec): Sequence;
    expand(asn1Pool: IModules, moduleName?: string, parameterList?: string[]): Sequence;
    depthMax(): number;
    replaceParameters(parameterMapping: {}): void;
    toString(): string;
    fillWorksheet(ieElem: IIe, ws: any, row: number, col: number, depthMax: number, constants: IConstantAndModule[], formatConfig: IFormatConfig, depth?: number): [number, number];
}
