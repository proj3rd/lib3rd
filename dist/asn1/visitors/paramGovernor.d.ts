import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { ParamGovernorContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
import { AsnType } from '../classes/asnType';
import { IDefinedObjectClass } from './definedObjectClass';
/**
 * ANTLR4 grammar
 * ```
 * paramGovernor : governor | IDENTIFIER
 * ```
 */
export declare class ParamGovernorVisitor extends AbstractParseTreeVisitor<AsnType | IDefinedObjectClass | string> implements ASN_3gppVisitor<AsnType | IDefinedObjectClass | string> {
    defaultResult(): AsnType | IDefinedObjectClass | string;
    visitChildren(paramGovernorCtx: ParamGovernorContext): AsnType | IDefinedObjectClass | string;
}
