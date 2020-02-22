import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { ParamGovernorContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
import { AsnType } from '../classes/asnType';
import { DefinedObjectClass } from '../classes/definedObjectClass';
export declare type ParamGovernor = AsnType | DefinedObjectClass | string;
/**
 * ANTLR4 grammar
 * ```
 * paramGovernor : governor | IDENTIFIER
 * ```
 */
export declare class ParamGovernorVisitor extends AbstractParseTreeVisitor<ParamGovernor> implements ASN_3gppVisitor<ParamGovernor> {
    defaultResult(): ParamGovernor;
    visitChildren(paramGovernorCtx: ParamGovernorContext): ParamGovernor;
}
