import { Worksheet } from 'exceljs';
import { IRowInput } from '../../common/spreadsheet';
import { IParameterMapping } from '../expander';
import { Constraint } from './constraint';
import { Modules } from './modules';
export declare type CharacterStringTypeLiteral = 'BMPString' | 'GeneralString' | 'GraphicString' | 'IA5String' | 'ISO646String' | 'NumericString' | 'PrintableString' | 'TeletexString' | 'T61String' | 'UniversalString' | 'UTF8String' | 'VideotexString' | 'VisibleString';
/**
 * X.680 clause 40
 * ```
 * characterStringTypeLiteral ( sizeConstraint )?
 * ```
 */
export declare class CharacterStringType {
    characterStringTypeLiteral: CharacterStringTypeLiteral;
    constraint: Constraint | undefined;
    reference: string | undefined;
    private characterStringTypeTag;
    constructor(characterStringTypeLiteral: CharacterStringTypeLiteral);
    expand(modules: Modules, parameterMappings: IParameterMapping[]): CharacterStringType;
    getDepth(): number;
    setConstraints(constraints: Constraint[]): void;
    toSpreadsheet(worksheet: Worksheet, row: IRowInput, depth: number): void;
    toString(): string;
}
//# sourceMappingURL=characterStringType.d.ts.map