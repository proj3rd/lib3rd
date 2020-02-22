import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { GovernorContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
import { AsnType } from '../classes/asnType';
import { DefinedObjectClass } from '../classes/definedObjectClass';
/**
 * ANTLR4 grammar
 * ```
 * governor : asnType | definedObjectClass
 * ```
 */
export declare class GovernorVisitor extends AbstractParseTreeVisitor<AsnType | DefinedObjectClass> implements ASN_3gppVisitor<AsnType | DefinedObjectClass> {
    defaultResult(): AsnType | DefinedObjectClass;
    visitChildren(governorCtx: GovernorContext): AsnType | DefinedObjectClass;
}
