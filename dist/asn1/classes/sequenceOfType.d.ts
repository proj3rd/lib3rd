import { Worksheet } from 'exceljs';
import { IParameterMapping } from '../expander';
import { IRowInput } from '../../common/spreadsheet';
import { AsnType } from './asnType';
import { Constraint } from './constraint';
import { Modules } from './modules';
import { NamedType } from './namedType';
import { ObjectSet } from './objectSet';
export declare class SequenceOfType {
    /**
     * @property {@link ObjectSet} is only applicable when expanding RAN3 ASN.1 spec.
     */
    baseType: AsnType | NamedType | ObjectSet;
    constraint: Constraint | undefined;
    reference: string | undefined;
    private sequenceOfTypeTag;
    constructor(baseType: AsnType | NamedType, constraint: Constraint | undefined);
    /**
     * Expand `baseType` property. This will mutate the object itself.
     * @param modules
     * @param parameterMappings
     */
    expand(modules: Modules, parameterMappings: IParameterMapping[]): SequenceOfType;
    getDepth(): number;
    setConstraints(constraints: Constraint[]): void;
    toSpreadsheet(worksheet: Worksheet, row: IRowInput, depth: number): void;
    toString(): string;
    private stringPrefix;
}
//# sourceMappingURL=sequenceOfType.d.ts.map