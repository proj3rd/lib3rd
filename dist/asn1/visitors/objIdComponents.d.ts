import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { ObjIdComponentsContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
/**
 * ANTLR4 grammar
 * ```
 * objIdComponents  :
 * 	    	NUMBER
 * 	|    	IDENTIFIER (L_PARAN (NUMBER | definedValue ) R_PARAN)?
 * 	|    	builtinType
 * 	|    	definedValue
 * ```
 */
export declare class ObjIdComponentsVisitor extends AbstractParseTreeVisitor<any> implements ASN_3gppVisitor<any> {
    defaultResult(): any;
    visitChildren(objIdComponentsCtx: ObjIdComponentsContext): any;
}
