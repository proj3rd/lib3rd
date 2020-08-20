import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { AsnType, DefinedObjectClass } from '../classes/asnType';
import { ObjectSet } from '../classes/objectSet';
import { Parameter } from '../classes/parameter';
import { ParameterizedAssignmentContext } from '../grammar/ASN_3gppParser';
import { ASN_3gppVisitor } from '../grammar/ASN_3gppVisitor';
/**
 * # Grammar
 * ```
 * parameterizedAssignment:
 *   parameterList (ASSIGN_OP (asnType | value | valueSet)) |
 *   (definedObjectClass ASSIGN_OP (object | objectClass | objectSet))
 * ```
 */
export declare class ParameterizedAssignmentVisitor extends AbstractParseTreeVisitor<IParameterizedAssignmentElements> implements ASN_3gppVisitor<IParameterizedAssignmentElements> {
    visitChildren(ctx: ParameterizedAssignmentContext): IParameterizedAssignmentElements;
    protected defaultResult(): IParameterizedAssignmentElements;
}
interface IParameterizedAssignmentElements {
    parameterizedTypeAssignmentElements?: IParameterizedTypeAssignmentElements;
    objectSetAssignmentElements?: IObjectSetAssignmentElements;
}
interface IParameterizedTypeAssignmentElements {
    parameters: Parameter[];
    asnType: AsnType;
}
interface IObjectSetAssignmentElements {
    definedObjectClass: DefinedObjectClass;
    objectSet: ObjectSet;
}
export {};
//# sourceMappingURL=parameterizedAssignmentVisitor.d.ts.map