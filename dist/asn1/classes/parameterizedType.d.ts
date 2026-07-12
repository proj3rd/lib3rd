import { Worksheet } from 'exceljs';
import { IRowInput } from '../../common/spreadsheet';
import { IParameterMapping } from '../expander';
import { ActualParameter } from '../types/actualParamter';
import { AsnType } from '../types/asnType';
import { Constraint } from './constraint';
import { ExternalTypeReference } from './externalTypeReference';
import { Modules } from './modules';
import { ObjectSet } from './objectSet';
import { TypeReference } from './typeReference';
export declare class ParameterizedType {
    simpleDefinedType: TypeReference | ExternalTypeReference;
    actualParameters: ActualParameter[];
    reference: string | undefined;
    paramterizedTypeTag: boolean;
    constructor(simpleDefinedType: TypeReference | ExternalTypeReference, actualParameters: ActualParameter[]);
    static fromObject(obj: unknown): ParameterizedType;
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
    private toStringHelper;
}
//# sourceMappingURL=parameterizedType.d.ts.map