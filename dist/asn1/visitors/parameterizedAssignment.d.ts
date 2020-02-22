import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { ParameterizedAssignmentContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
import { AsnType } from '../classes/asnType';
import { ObjectSet } from '../classes/objectSet';
/**
 * ANTLR4 grammar
 * ```
 * parameterizedAssignment :
 *  parameterList
 * (ASSIGN_OP
 * 	(asnType
 * 		|	value
 * 		|	valueSet
 * 	)
 * )
 * |( definedObjectClass ASSIGN_OP
 * 	( object
 * 		|	objectClass
 * 		|	objectSet
 * 	)
 * )
 * ;
 * ```
 */
export declare class ParameterizedAssignmentVisitor extends AbstractParseTreeVisitor<AsnType | ObjectSet> implements ASN_3gppVisitor<AsnType | ObjectSet> {
    defaultResult(): AsnType | ObjectSet;
    visitChildren(parameterizedAssignmentCtx: ParameterizedAssignmentContext): AsnType | ObjectSet;
}
