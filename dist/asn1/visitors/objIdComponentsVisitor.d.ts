import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { ObjIdComponentsContext } from '../grammar/ASN_3gppParser';
import { ASN_3gppVisitor } from '../grammar/ASN_3gppVisitor';
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
export declare class ObjIdComponentsVisitor extends AbstractParseTreeVisitor<ObjectIdComponents> implements ASN_3gppVisitor<ObjectIdComponents> {
    visitChildren(ctx: ObjIdComponentsContext): ObjectIdComponents;
    protected defaultResult(): ObjectIdComponents;
}
//# sourceMappingURL=objIdComponentsVisitor.d.ts.map