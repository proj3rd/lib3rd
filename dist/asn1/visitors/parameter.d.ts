import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { ParameterContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
import { AsnType } from '../classes/asnType';
import { IDefinedObjectClass } from './definedObjectClass';
export interface IParameter {
    paramGovernor: AsnType | IDefinedObjectClass | string;
    parameterName: string;
}
/**
 * ANTLR4 grammar
 * ```
 * parameter : (paramGovernor COLON)? IDENTIFIER
 * ```
 */
export declare class ParameterVisitor extends AbstractParseTreeVisitor<IParameter> implements ASN_3gppVisitor<IParameter> {
    defaultResult(): IParameter;
    visitChildren(parameterCtx: ParameterContext): IParameter;
}
