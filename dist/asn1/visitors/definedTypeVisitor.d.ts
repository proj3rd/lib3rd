import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { DefinedType } from '../classes/asnType';
import { DefinedTypeContext } from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';
/**
 * # Grammar
 * ```
 * definedType: IDENTIFIER (DOT IDENTIFER)? actualParameterList?
 * ```
 */
export declare class DefinedTypeVisitor extends AbstractParseTreeVisitor<DefinedType> implements grammar3rdVisitor<DefinedType> {
    visitChildren(ctx: DefinedTypeContext): DefinedType;
    protected defaultResult(): DefinedType;
}
//# sourceMappingURL=definedTypeVisitor.d.ts.map