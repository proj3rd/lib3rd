import { Worksheet } from 'exceljs';
import { IRowInput } from '../../common/spreadsheet';
import { IParameterMapping } from '../expander';
import { FixedTypeValueFieldSpec } from './fixedTypeValueFieldSpec';
import { Modules } from './modules';
import { Syntax } from './syntax';
import { TypeFieldSpec } from './typeFieldSpec';
export declare type FieldSpec = TypeFieldSpec | FixedTypeValueFieldSpec;
/**
 * X.681 clause 9.3
 * ```
 * CLASS { fieldSpec[0], ..., fieldSpec[n-1] } WITH SYNTAX { syntax[0] ... syntax[n-1] }
 * ```
 */
export declare class ObjectClassDefinition {
    fieldSpecs: FieldSpec[];
    syntaxList: Syntax[];
    constructor(fieldSpecs: FieldSpec[], syntaxList: Syntax[]);
    /**
     * Expand `fieldSpecs` property. This will mutate the object itself.
     * @param modules
     * @param parameterMappings
     */
    expand(modules: Modules, parameterMappings: IParameterMapping[]): ObjectClassDefinition;
    getDepth(): number;
    toSpreadsheet(worksheet: Worksheet, row: IRowInput, depth: number): void;
    toString(): string;
}
export declare type ObjectClass = ObjectClassDefinition;
//# sourceMappingURL=objectClass.d.ts.map