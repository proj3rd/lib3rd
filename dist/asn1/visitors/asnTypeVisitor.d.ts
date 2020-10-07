import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { AsnType } from '../classes/asnType';
import { AsnTypeContext } from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';
/**
 * # Grammar
 * ```
 * asnType: (builtinType | referencedType) (constraint)*
 * ```
 */
export declare class AsnTypeVisitor extends AbstractParseTreeVisitor<AsnType> implements grammar3rdVisitor<AsnType> {
    visitChildren(ctx: AsnTypeContext): AsnType;
    protected defaultResult(): AsnType;
}
//# sourceMappingURL=asnTypeVisitor.d.ts.map