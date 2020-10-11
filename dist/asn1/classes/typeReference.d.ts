import { Worksheet } from 'exceljs';
import { IRowInput } from '../../common/spreadsheet';
import { IParameterMapping } from '../expander';
import { AsnType } from './asnType';
import { Constraint } from './constraint';
import { Modules } from './modules';
import { ObjectSet } from './objectSet';
export declare class TypeReference {
    typeReference: string;
    constraint: Constraint | undefined;
    reference: string | undefined;
    private typeReferenceTag;
    constructor(typeReference: string);
    /**
     * Expand `typeReference` property.
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
//# sourceMappingURL=typeReference.d.ts.map