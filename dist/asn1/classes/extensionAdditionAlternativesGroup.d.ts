import { IFormatConfig, IIe } from '../format/xlsx';
import { ConstraintSpec } from '../visitors/constraintSpec';
import { IModules } from '../visitors/modules';
import { Base, IConstantAndModule } from './base';
import { NamedType } from './namedType';
export declare class ExtensionAdditionAlternativesGroup extends Base {
    alternativeTypeList: NamedType[];
    constructor(alternativeTypeList: NamedType[], versionNumber: null);
    setConstraint(constraint: ConstraintSpec): ExtensionAdditionAlternativesGroup;
    expand(asn1Pool: IModules, moduleName?: string, parameterList?: string[]): ExtensionAdditionAlternativesGroup;
    depthMax(): number;
    replaceParameters(paramterMapping: {}): void;
    toString(): string;
    fillWorksheet(ieElem: IIe, ws: any, row: number, col: number, depthMax: number, constants: IConstantAndModule[], formatConfig: IFormatConfig, depth?: number): [number, number];
}
