import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { GovernorContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
import { AsnType } from '../classes/asnType';
import { IDefinedObjectClass } from './definedObjectClass';
/**
 * ANTLR4 grammar
 * ```
 * governor : asnType | definedObjectClass
 * ```
 */
export declare class GovernorVisitor extends AbstractParseTreeVisitor<AsnType | IDefinedObjectClass> implements ASN_3gppVisitor<AsnType | IDefinedObjectClass> {
    defaultResult(): AsnType | IDefinedObjectClass;
    visitChildren(governorCtx: GovernorContext): AsnType | IDefinedObjectClass;
}
