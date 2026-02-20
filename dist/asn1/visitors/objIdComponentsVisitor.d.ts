import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { ObjIdComponentsContext } from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';
import { ObjectIdComponents } from '../types';
/**
 * # Grammar
 * ```
 * objIdComponents:
 *     NUMBER
 *   | IDENTIFIER (L_PARAN (NUMBER | definedValue ) R_PARAN)?
 *   | definedValue
 *   // 3GPP-specific: Syntactic sugar for {BIT, OCTET} STRING and other complex definition
 *   | builtinType constraint?
 * ```
 */
export declare class ObjIdComponentsVisitor extends AbstractParseTreeVisitor<ObjectIdComponents> implements grammar3rdVisitor<ObjectIdComponents> {
    visitChildren(ctx: ObjIdComponentsContext): ObjectIdComponents;
    protected defaultResult(): ObjectIdComponents;
}
//# sourceMappingURL=objIdComponentsVisitor.d.ts.map