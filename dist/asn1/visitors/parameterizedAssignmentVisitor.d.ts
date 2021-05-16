import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { DefinedObjectClass } from '../classes/asnType';
import { ObjectSet } from '../classes/objectSet';
import { Parameter } from '../classes/parameter';
import { ParameterizedAssignmentContext } from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';
import { AsnType } from '../types/asnType';
interface IParameterizedTypeAssignmentElements {
    parameters: Parameter[];
    asnType: AsnType;
}
interface IObjectSetAssignmentElements {
    definedObjectClass: DefinedObjectClass;
    objectSet: ObjectSet;
}
interface IParameterizedAssignmentElements {
    parameterizedTypeAssignmentElements?: IParameterizedTypeAssignmentElements;
    objectSetAssignmentElements?: IObjectSetAssignmentElements;
}
/**
 * # Grammar
 * ```
 * parameterizedAssignment:
 *   parameterList (ASSIGN_OP (asnType | value | valueSet)) |
 *   (definedObjectClass ASSIGN_OP (object | objectClass | objectSet))
 * ```
 */
export declare class ParameterizedAssignmentVisitor extends AbstractParseTreeVisitor<IParameterizedAssignmentElements> implements grammar3rdVisitor<IParameterizedAssignmentElements> {
    visitChildren(ctx: ParameterizedAssignmentContext): IParameterizedAssignmentElements;
    protected defaultResult(): IParameterizedAssignmentElements;
}
export {};
//# sourceMappingURL=parameterizedAssignmentVisitor.d.ts.map