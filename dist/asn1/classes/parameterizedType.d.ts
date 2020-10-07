import { Worksheet } from 'exceljs';
import { IRowInput } from '../../common/spreadsheet';
import { IParameterMapping } from '../expander';
import { AsnType, DefinedObjectClass } from './asnType';
import { Constraint } from './constraint';
import { ExternalTypeReference } from './externalTypeReference';
import { Modules } from './modules';
import { ObjectSet } from './objectSet';
import { TypeReference } from './typeReference';
import { Value } from './value';
export declare type ActualParameter = AsnType | Value | DefinedObjectClass | ObjectSet;
export declare class ParameterizedType {
    simpleDefinedType: TypeReference | ExternalTypeReference;
    actualParameters: ActualParameter[];
    private paramterizedTypeTag;
    constructor(simpleDefinedType: TypeReference | ExternalTypeReference, actualParameters: ActualParameter[]);
    /**
     * Expand the parameterized type.
     * @param modules
     * @param parameterMappings
     * @returns Returns {@link AsnType} of {@link ObjectSet}.
     * {@link ObjectSet} is only applicable when expanding RAN3 ASN.1 spec.
     */
    expand(modules: Modules, parameterMappings: IParameterMapping[]): AsnType | ObjectSet;
    getDepth(): number;
    setConstraints(constraints: Constraint[]): void;
    toSpreadsheet(worksheet: Worksheet, row: IRowInput, depth: number): void;
    toString(): string;
}
//# sourceMappingURL=parameterizedType.d.ts.map