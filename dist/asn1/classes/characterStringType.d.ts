import { IParameterMapping } from '../expander';
import { Constraint } from './constraint';
import { Modules } from './modules';
/**
 * X.680 clause 40
 * ```
 * characterStringTypeLiteral ( sizeConstraint )?
 * ```
 */
export declare class CharacterStringType {
    characterStringTypeLiteral: CharacterStringTypeLiteral;
    constraint: Constraint | undefined;
    private characterStringTypeTag;
    constructor(characterStringTypeLiteral: CharacterStringTypeLiteral);
    expand(modules: Modules, parameterMappings: IParameterMapping[]): CharacterStringType;
    setConstraints(constraints: Constraint[]): undefined;
    toString(): string;
}
export declare type CharacterStringTypeLiteral = 'BMPString' | 'GeneralString' | 'GraphicString' | 'IA5String' | 'ISO646String' | 'NumericString' | 'PrintableString' | 'TeletexString' | 'T61String' | 'UniversalString' | 'UTF8String' | 'VideotexString' | 'VisibleString';
//# sourceMappingURL=characterStringType.d.ts.map