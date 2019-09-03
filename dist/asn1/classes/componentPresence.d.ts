import { IFormatConfig, IIe } from '../format/xlsx';
import { ConstraintSpec } from '../visitors/constraintSpec';
import { IModules } from '../visitors/modules';
import { Base, IConstantAndModule } from './base';
export declare class ComponentPresence extends Base {
    identifier: string;
    absentPresent: string;
    constructor(identifier: string, absentPresent: string);
    setConstraint(constraint: ConstraintSpec): ComponentPresence;
    expand(asn1Pool: IModules, moduleName?: string): never;
    depthMax(): never;
    replaceParameters(parameterMapping: {}): void;
    toString(): string;
    fillWorksheet(ieElem: IIe, ws: any, row: number, col: number, depthMax: number, constants: IConstantAndModule[], formatConfig: IFormatConfig, depth?: number): never;
}
