import { IFormatConfig, IIe } from '../format/xlsx';
import { ConstraintSpec } from '../visitors/constraintSpec';
import { IModules } from '../visitors/modules';
import { Base, IConstantAndModule } from './base';
import { IParameterMapping } from './definedType';
import { NamedType } from './namedType';
import { Parameter } from './parameter';
export declare class ExtensionAdditionAlternativesGroup extends Base {
    alternativeTypeList: NamedType[];
    constructor(alternativeTypeList: NamedType[], versionNumber: null);
    setConstraint(constraint: ConstraintSpec): ExtensionAdditionAlternativesGroup;
    expand(asn1Pool: IModules, moduleName?: string, parameterList?: Parameter[]): ExtensionAdditionAlternativesGroup;
    depthMax(): number;
    replaceParameters(paramterMapping: IParameterMapping[]): void;
    toString(): string;
    fillWorksheet(ieElem: IIe, ws: any, row: number, col: number, depthMax: number, constants: IConstantAndModule[], formatConfig: IFormatConfig, depth?: number): [number, number];
}
