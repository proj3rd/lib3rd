import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { OctetStringType } from '../classes/octetStringType';
import { OctetStringTypeContext } from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';
/**
 * # Grammar
 * ```
 * octetStringType: OCTET_LITERAL STRING_LITERAL
 * ```
 */
export declare class OctetStringTypeVisitor extends AbstractParseTreeVisitor<OctetStringType> implements grammar3rdVisitor<OctetStringType> {
    visitChildren(ctx: OctetStringTypeContext): OctetStringType;
    protected defaultResult(): OctetStringType;
}
//# sourceMappingURL=octetStringTypeVisitor.d.ts.map