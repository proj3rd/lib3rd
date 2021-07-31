import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { AsnTypeContext } from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';
import { AsnType } from '../types/asnType';
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