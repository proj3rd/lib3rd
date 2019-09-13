import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { ObjectClassAssignmentContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
export declare class ObjectClassAssignmentVisitor extends AbstractParseTreeVisitor<any> implements ASN_3gppVisitor<any> {
    defaultResult(): any;
    visitChildren(objectClassAssignmentCtx: ObjectClassAssignmentContext): any;
}
