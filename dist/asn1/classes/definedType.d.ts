import { IFormatConfig, IIe } from '../format/xlsx';
import { ActualParameter } from '../visitors/actualParameter';
import { ConstraintSpec } from '../visitors/constraintSpec';
import { IModules } from '../visitors/modules';
import { AsnType } from './asnType';
import { Base, IConstantAndModule } from './base';
import { WithComponents } from './withComponents';
export declare class DefinedType extends AsnType {
    moduleReference: string;
    typeReference: string;
    actualParameterList: ActualParameter[];
    withComponents: WithComponents;
    setConstraint(constraint: ConstraintSpec): DefinedType;
    expand(asn1Pool: IModules, moduleName?: string, parameterList?: string[]): Base;
    depthMax(): number;
    replaceParameters(parameterMapping: {}): void;
    toString(): string;
    fillWorksheet(ieElem: IIe, ws: any, row: number, col: number, depthMax: number, constants: IConstantAndModule[], formatConfig: IFormatConfig, depth?: number): [number, number];
    private getActualParameterListString;
}
