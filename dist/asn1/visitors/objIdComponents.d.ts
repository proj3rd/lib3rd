import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { ObjIdComponentsContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
import { BuiltinType } from './builtinType';
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
export declare class ObjIdComponentsVisitor extends AbstractParseTreeVisitor<BuiltinType | string | number> implements ASN_3gppVisitor<BuiltinType | string | number> {
    defaultResult(): BuiltinType | string | number;
    visitChildren(objIdComponentsCtx: ObjIdComponentsContext): BuiltinType | string | number;
}
