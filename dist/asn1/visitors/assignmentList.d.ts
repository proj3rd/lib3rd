import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { AssignmentListContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
import { AsnType } from '../classes/asnType';
import { ObjectClass } from '../classes/objectClass';
import { BuiltinValue } from './builtinValue';
export interface IAssignments {
    [referenceName: string]: AsnType | ObjectClass;
}
export interface IConstants {
    [referenceName: string]: BuiltinValue;
}
interface IAssignmentList {
    assignments: IAssignments;
    constants: IConstants;
}
/**
 * ANTLR4 grammar
 * ```
 * assignmentList :  (assignment) (assignment)*
 * assignment :
 * (IDENTIFIER
 *  (  valueAssignment
 *  | typeAssignment
 *  | parameterizedAssignment
 *  | objectClassAssignment
 *  )
 * )
 * ```
 */
export declare class AssignmentListVisitor extends AbstractParseTreeVisitor<IAssignmentList> implements ASN_3gppVisitor<IAssignmentList> {
    defaultResult(): IAssignmentList;
    visitChildren(assignmentListCtx: AssignmentListContext): IAssignmentList;
}
export {};
