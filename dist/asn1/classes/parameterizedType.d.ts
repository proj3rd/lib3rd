import { Worksheet } from 'exceljs';
import { IParameterMapping } from '../expander';
import { IRowInput } from '../formatter/spreadsheet';
import { AsnType } from './asnType';
import { Constraint } from './constraint';
import { ExternalTypeReference } from './externalTypeReference';
import { Modules } from './modules';
import { TypeReference } from './typeReference';
import { Value } from './value';
export declare class ParameterizedType {
    simpleDefinedType: TypeReference | ExternalTypeReference;
    actualParameters: ActualParameter[];
    private paramterizedTypeTag;
    constructor(simpleDefinedType: TypeReference | ExternalTypeReference, actualParameters: ActualParameter[]);
    expand(modules: Modules, parameterMappings: IParameterMapping[]): AsnType;
    getDepth(): number;
    setConstraints(constraints: Constraint[]): void;
    toSpreadsheet(worksheet: Worksheet, row: IRowInput, depth: number): void;
    toString(): string;
    private expandExternalTypeReference;
    private expandTypeReference;
}
export declare type ActualParameter = AsnType | Value;
//# sourceMappingURL=parameterizedType.d.ts.map